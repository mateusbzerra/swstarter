import { Request, Response } from "express";
import { EventsModel } from "../models/EventModel";
import { eventSchema } from "../schemas/eventSchema";
import { Job } from "bull";
import EventsQueueService from "../services/EventsQueueService";

class EventController {
  async index(req: Request, res: Response) {
    const events = await EventsModel.find();
    res.json(events);
  }

  async addEventToQueue(req: Request, res: Response) {
    const validateFields = eventSchema.safeParse(req.body);

    if (!validateFields.success) {
      const response = {
        success: false,
        message: "Invalid Data",
        errors: validateFields.error.flatten().fieldErrors,
      };

      res.status(400).json(response);
      return;
    }
    const eventsQueue = new EventsQueueService().getQueue();
    eventsQueue?.add({ ...req.body });

    res
      .status(201)
      .json({ success: true, message: "Event successfully added to queue!" });
  }

  async createNewEvent(job: Job) {
    await EventsModel.create(job.data);
  }
}

export const eventController = new EventController();
