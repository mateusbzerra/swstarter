import { getObjectIdFromUrl } from "@/services/get-object-id-from-url";
import { ResultMessageWrapper } from "./components/ResultMessageWrapper";
import { ResultItem } from "./components/ResultItem";
import {
  SearchType,
  StarWarsFilm,
  StarWarsPerson,
} from "@/data/star-wars/types";

type DataType = {
  count: number;
  results: StarWarsPerson[] | StarWarsFilm[];
};
interface Props {
  isLoading: boolean;
  data: DataType;
  searchType?: SearchType;
}

export const SearchResultsContent = ({
  isLoading,
  data,
  searchType,
}: Props) => {
  if (isLoading) {
    return (
      <ResultMessageWrapper>
        <p>Searching...</p>
      </ResultMessageWrapper>
    );
  }

  if (!data?.count) {
    return (
      <ResultMessageWrapper>
        <p>There are zero matches.</p>
        <p>Use the form to search for People or Movies.</p>
      </ResultMessageWrapper>
    );
  }

  if (!searchType) {
    return (
      <ResultMessageWrapper>
        <p>Please select People or Movies option</p>
      </ResultMessageWrapper>
    );
  }

  return (
    <>
      {data?.results?.map((item) => (
        <ResultItem
          searchType={searchType}
          key={item.url}
          name={"title" in item ? item.title : item.name}
          url={getObjectIdFromUrl(item?.url)}
        />
      ))}
    </>
  );
};
