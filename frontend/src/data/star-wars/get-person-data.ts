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
  const response = await fetch(`${API_URL}/people/${personId}`);

  if (!response.ok) {
    return { success: false, message: "Failed to fetch person data" };
  }

  const responseJson = await response.json();

  return { success: true, person: responseJson };
};
