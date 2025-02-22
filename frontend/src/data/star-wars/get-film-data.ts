import { API_URL } from "./config";
import { StarWarsFilm } from "./types";

interface Props {
  filmId: string;
}

interface Response {
  success: boolean;
  message?: string;
  film?: StarWarsFilm;
}

export const getFilmData = async ({ filmId }: Props): Promise<Response> => {
  const response = await fetch(`${API_URL}/films/${filmId}`);

  if (!response.ok) {
    return { success: false, message: "Failed to fetch person data" };
  }

  const responseJson = await response.json();

  return { success: true, film: responseJson };
};
