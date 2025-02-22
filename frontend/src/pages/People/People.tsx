import { getPersonData } from "@/data/star-wars/get-person-data";
import { Button } from "@/ui/Button";
import { Card } from "@/ui/Card";
import { useQuery } from "@tanstack/react-query";

import { Link, useParams } from "react-router";
import { FilmNameLink } from "./components/FilmNameLink";
import { CardSkeleton } from "@/components/CardSkeleton";

export const People = () => {
  const params = useParams();

  const personId = params.id;

  const { data, isLoading } = useQuery({
    queryKey: ["PERSON", { personId }],
    queryFn: () => getPersonData({ personId: String(personId) }),
    enabled: personId !== undefined,
  });

  if (!isLoading && (!personId || !data?.success)) {
    return (
      <div className="font-bold text-center text-lg">Person not found</div>
    );
  }

  const person = data?.person;

  if (isLoading) {
    return <CardSkeleton />;
  }

  return (
    <div className="w-full max-w-[804px] mx-auto px-3 md:px-0">
      <Card>
        <div className="w-full min-h-[287px]">
          <h1 className="font-bold text-lg mb-[30px]">{person?.name}</h1>
          <div className="flex flex-wrap items-start justify-between gap-y-6">
            <div className="w-full max-w-[322px]">
              <h2 className="font-bold border-b border-pinkish-grey pb-3 mb-1">
                Details
              </h2>
              <p>Birth Year: {person?.birth_year}</p>
              <p>Gender: {person?.gender}</p>
              <p>Eye Color: {person?.eye_color}</p>
              <p>Hair Color: {person?.hair_color}</p>
              <p>Height: {person?.height}</p>
              <p>Mass: {person?.mass}</p>
            </div>
            <div className="w-full max-w-[322px]">
              <h2 className="font-bold border-b border-pinkish-grey pb-3 mb-1">
                Movies
              </h2>
              <ul className="space-y-1">
                {person?.films?.map((url) => (
                  <li key={url}>
                    <FilmNameLink url={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Link to="/" className="self-start mt-[30px]">
          <Button>Back to Search</Button>
        </Link>
      </Card>
    </div>
  );
};
