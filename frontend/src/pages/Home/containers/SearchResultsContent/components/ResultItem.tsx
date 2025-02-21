import { SearchType } from "@/data/star-wars/types";
import { Button } from "@/ui/Button";
import { Link } from "react-router";

interface Props {
  name: string;
  url: string;
  searchType: SearchType;
}

export const ResultItem = ({ name, url, searchType }: Props) => {
  return (
    <div className="flex justify-between items-center py-[10px] border-b border-pinkish-grey">
      <h2 className="font-bold">{name}</h2>
      <Link to={`/${searchType}/${url}`}>
        <Button>See Details</Button>
      </Link>
    </div>
  );
};
