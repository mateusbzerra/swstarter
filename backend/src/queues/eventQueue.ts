import Bull from "bull";
import { eventController } from "../controllers/EventController";
import { Request, Response, NextFunction } from "express";

export const setupEventQueue = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const eventsQueue = new Bull("events");
  eventsQueue.process(eventController.createNewEvent);
  req.eventsQueue = eventsQueue;

  next();
};
