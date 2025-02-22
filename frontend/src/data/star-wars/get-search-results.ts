import { logAnalyticsEvent } from "@/services/log-analytics-event";
import { API_URL } from "./config";
import { SearchRequestProps } from "./types";

export const getSearchResults = async ({
  searchTerm,
  searchType,
}: SearchRequestProps) => {
  const timeStarted = new Date();

  const REQUEST_URL = `${API_URL}/${searchType}/?search=${searchTerm}`;

  try {
    const response = await fetch(REQUEST_URL);

    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.error("Error fetching data", error);
    return {
      success: false,
      message: "Error fetching data",
    };
  } finally {
    logAnalyticsEvent({
      name: "SEARCH",
      requestUrl: REQUEST_URL,
      requestTimeEnded: new Date(),
      requestTimeStarted: timeStarted,
    });
  }
};
