import { getObjectIdFromUrl } from "@/services/get-object-id-from-url";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

export const CharacterNameLink = ({ url }: { url: string }) => {
  const { data, isLoading } = useQuery({
    queryKey: ["CHARACTER", { url }],
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
  const characterId = getObjectIdFromUrl(data.url);

  return (
    <Link
      to={`/people/${characterId}`}
      className="text-[#0094ff] underline text-sm"
    >
      {data.name}
    </Link>
  );
};
