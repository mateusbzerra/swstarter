import { getObjectIdFromUrl } from "@/services/get-object-id-from-url";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

export const FilmNameLink = ({ url }: { url: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["FILM", { url }],
    queryFn: async () => {
      return fetch(url).then((res) => res.json());
    },
    enabled: url !== undefined,
  });

  if (isLoading) {
    return (
      <div className="bg-background w-full h-2 rounded-sm animate-pulse"></div>
    );
  }
  const filmId = getObjectIdFromUrl(data.url);

  return (
    <Link to={`/films/${filmId}`} className="text-[#0094ff] underline text-sm">
      {data.title}
    </Link>
  );
};
