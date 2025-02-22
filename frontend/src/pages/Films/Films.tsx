import { getFilmData } from "@/data/star-wars/get-film-data";
import { Button } from "@/ui/Button";
import { Card } from "@/ui/Card";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router";
import { CharacterNameLink } from "./components/CharacterNameLink";
import { CardSkeleton } from "@/components/CardSkeleton";

export const Films = () => {
  const params = useParams();

  const filmId = params.id;

  const { data, isLoading } = useQuery({
    queryKey: ["FILM", { filmId }],
    queryFn: () => getFilmData({ filmId: String(filmId) }),
    enabled: filmId !== undefined,
  });

  if (!isLoading && (!filmId || !data?.success)) {
    return <div className="font-bold text-center text-lg">Film not found</div>;
  }

  if (isLoading) {
    return <CardSkeleton />;
  }

  const film = data?.film;

  return (
    <div className="w-full max-w-[804px] mx-auto px-3 md:px-0">
      <Card>
        <div className="w-full min-h-[417px]">
          <h1 className="font-bold text-lg mb-[30px]">{film?.title}</h1>
          <div className="flex flex-wrap items-start justify-between">
            <div className="w-full max-w-[322px]">
              <h2 className="font-bold border-b border-pinkish-grey pb-3 mb-1">
                Opening Crawl
              </h2>
              <p className="whitespace-pre-wrap text-sm">
                {film?.opening_crawl}
              </p>
            </div>
            <div className="w-full max-w-[322px]">
              <h2 className="font-bold border-b border-pinkish-grey pb-3 mb-1">
                Characters
              </h2>
              <ul className="space-y-1">
                {film?.characters?.map((url) => (
                  <li key={url} className="inline">
                    <CharacterNameLink url={url} />
                    {", "}
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
