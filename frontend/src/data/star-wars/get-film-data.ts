import { logAnalyticsEvent } from "@/services/log-analytics-event";
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
  const REQUEST_URL = `${API_URL}/films/${filmId}`;
  const requestTimeStarted = new Date();

  const response = await fetch(REQUEST_URL);

  if (!response.ok) {
    return { success: false, message: "Failed to fetch person data" };
  }

  const responseJson = await response.json();

  if (responseJson) {
    logAnalyticsEvent({
      name: "GET_FILM_DATA",
      requestUrl: REQUEST_URL,
      requestTimeEnded: new Date(),
      requestTimeStarted: requestTimeStarted,
    });
  }

  return { success: true, film: responseJson };
};
