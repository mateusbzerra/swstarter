import { logAnalyticsEvent } from "@/services/log-analytics-event";
import { API_URL } from "./config";
import { StarWarsPerson } from "./types";

interface Props {
  personId: string;
}

interface Response {
  success: boolean;
  message?: string;
  person?: StarWarsPerson;
}

export const getPersonData = async ({ personId }: Props): Promise<Response> => {
  const REQUEST_URL = `${API_URL}/people/${personId}`;
  const requestTimeStarted = new Date();

  const response = await fetch(REQUEST_URL);

  if (!response.ok) {
    return { success: false, message: "Failed to fetch person data" };
  }

  const responseJson = await response.json();

  if (responseJson) {
    logAnalyticsEvent({
      name: "GET_PERSON_DATA",
      requestUrl: REQUEST_URL,
      requestTimeEnded: new Date(),
      requestTimeStarted: requestTimeStarted,
    });
  }

  return { success: true, person: responseJson };
};
