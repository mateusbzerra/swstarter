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

    const newQueue = new Bull(Queues.EVENTS);
    this.eventsQueue = newQueue;
    this.eventsQueue.process(eventController.createNewEvent);
  }

  getQueue() {
    return this.eventsQueue;
  }
}
