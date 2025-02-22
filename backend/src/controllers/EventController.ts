import { Request, Response } from "express";
import { EventsModel } from "../models/EventModel";
import { eventSchema } from "../schemas/eventSchema";
import { Job } from "bull";
import EventsQueueService from "../services/EventsQueueService";
import { redisClient } from "../redis.config";
import { getTopThreeMostRepeated } from "../services/getTopThreeMostRepeated";
import { getSearchEventsUrl } from "../services/getSearchEventsUrl";

const FIVE_MINUTES_IN_SECONDS = 5 * 60;

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

  async getAnalytics(req: Request, res: Response) {
    const total = await EventsModel.countDocuments();
    const searchEvents = await EventsModel.find({ name: "SEARCH" }).sort({
      createdAt: -1,
    });
    const filmEvents = await EventsModel.find({
      name: "GET_FILM_DATA",
    })
      .sort({ createdAt: -1 })
      .limit(10);
    const personEvents = await EventsModel.find({
      name: "GET_PERSON_DATA",
    })
      .sort({ createdAt: -1 })
      .limit(10);

    const allSearchedTerms = getSearchEventsUrl(searchEvents);
    const mostSearchedTerms = getTopThreeMostRepeated(allSearchedTerms);

    const analyticsData = {
      mostSearchedTerms,
      totalOfEvents: total,
      mostRecentRequests: {
        search: searchEvents
          .map(({ requestUrl, requestDuration }) => ({
            requestUrl,
            requestDuration,
          }))
          .slice(0, 10),
        film: filmEvents.map(({ requestUrl, requestDuration }) => ({
          requestUrl,
          requestDuration,
        })),
        person: personEvents.map(({ requestUrl, requestDuration }) => ({
          requestUrl,
          requestDuration,
        })),
      },
    };

    await redisClient.set(
      "analytics",
      JSON.stringify(analyticsData),
      "EX",
      FIVE_MINUTES_IN_SECONDS
    );

    res.json(analyticsData);
  }
}

export const eventController = new EventController();
