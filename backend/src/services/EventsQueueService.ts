import Bull, { Job, Queue } from "bull";
import { eventController } from "../controllers/EventController";

enum Queues {
  EVENTS = "events",
}

export default class EventsQueueService {
  private eventsQueue: Queue | undefined;

  private static instance: EventsQueueService;

  constructor() {
    if (EventsQueueService.instance instanceof EventsQueueService) {
      return EventsQueueService.instance;
    }

    EventsQueueService.instance = this;

    const newQueue = new Bull(Queues.EVENTS, {
      redis: {
        host: process.env.REDIS_HOST || "localhost",
        port: Number(process.env.REDIS_PORT || 6379),
      },
    });
    this.eventsQueue = newQueue;
    this.eventsQueue.process(eventController.createNewEvent);
  }

  getQueue() {
    return this.eventsQueue;
  }
}
