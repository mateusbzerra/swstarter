import { z } from "zod";

export const eventSchema = z.object({
  name: z.string(),
  requestUrl: z.string(),
  requestDuration: z.string(),
});
