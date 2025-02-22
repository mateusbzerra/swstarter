import { Queue } from "bull";

declare global {
  namespace Express {
    interface Request {
      eventsQueue?: Queue;
    }
  }
}
