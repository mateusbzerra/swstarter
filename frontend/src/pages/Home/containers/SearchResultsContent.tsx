import { ResultMessageWrapper } from "../components/ResultEmptyState";
import { ResultItem } from "../components/ResultItem";

export const SearchResultsContent = ({ isLoading, data, type }) => {
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

  return (
    <>
      {data?.results?.map((item) => (
        <ResultItem
          type={type}
          key={`${item?.birthYear}${item.name}`}
          name={item?.name || item?.title}
          url="/"
        />
      ))}
    </>
  );
};
