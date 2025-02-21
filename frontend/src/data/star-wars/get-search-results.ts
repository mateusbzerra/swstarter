import { API_URL } from "./config";
import { SearchRequestProps } from "./types";

export const getSearchResults = async ({
  searchTerm,
  searchType,
}: SearchRequestProps) => {
  try {
    const response = await fetch(
      `${API_URL}/${searchType}/?search=${searchTerm}`
    );

    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    console.error("Error fetching data", error);
    return {
      success: false,
      message: "Error fetching data",
    };
  }
};
