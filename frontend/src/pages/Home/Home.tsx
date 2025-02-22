import { useQuery } from "@tanstack/react-query";
import { Card } from "@/ui/Card";
import { SearchFormCard } from "./containers/SearchFormCard/SearchFormCard";
import { getSearchResults } from "@/data/star-wars/get-search-results";
import { useState } from "react";
import { SearchResultsContent } from "./containers/SearchResultsContent/SearchResultsContent";
import { SearchRequestProps } from "@/data/star-wars/types";

export const Home = () => {
  const [searchParams, setSearchParams] = useState<SearchRequestProps>();

  const { data, isLoading } = useQuery({
    queryKey: ["SEARCH", { searchParams }],
    queryFn: () =>
      searchParams ? getSearchResults({ ...searchParams }) : null,
    enabled: searchParams !== undefined,
  });

  const onSubmitSearch = (data: SearchRequestProps) => {
    setSearchParams(data);
  };

  return (
    <div className="flex flex-wrap md:flex-nowrap gap-y-9 px-3 gap-x-[30px] md:px-0">
      <div className="w-full md:max-w-[410px]">
        <SearchFormCard isLoading={isLoading} onSubmitSearch={onSubmitSearch} />
      </div>

      <Card>
        <div className="h-[582px]">
          <h2 className="text-lg font-bold pb-[10px] border-b border-pinkish-grey">
            Results
          </h2>
          <SearchResultsContent
            isLoading={isLoading}
            data={data}
            searchType={searchParams?.searchType}
          />
        </div>
      </Card>
    </div>
  );
};
