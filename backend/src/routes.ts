import { Router, Request, Response } from "express";
import { eventController } from "./controllers/EventController";

const router: Router = Router();

router.get("/", eventController.index);
router.post("/events", eventController.addEventToQueue);

export { router };
