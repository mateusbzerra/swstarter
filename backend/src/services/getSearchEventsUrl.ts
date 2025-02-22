import { EventSchema } from "../models/EventModel";
import { InferSchemaType } from "mongoose";

type searchEvents = InferSchemaType<typeof EventSchema>;

export const getSearchEventsUrl = (searchEvents: searchEvents[]) => {
  const searchTerms = searchEvents.reduce((acc, event) => {
    try {
      const searchParams = new URL(String(event.requestUrl)).searchParams;
      const item = searchParams.get("search");
      acc.push(String(item));
      return acc;
    } catch (e) {
      return acc;
    }
  }, [] as string[]);

  return searchTerms;
};
