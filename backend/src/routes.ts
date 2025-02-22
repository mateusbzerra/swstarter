import { Router, Request, Response } from "express";
import { eventController } from "./controllers/EventController";
import { analyticsCacheMiddleware } from "./middleware/analyticsCacheMiddleware";

const router: Router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json({ welcome: "Analytics API with queue service" });
});
router.post("/events", eventController.addEventToQueue);
router.get(
  "/analytics",
  analyticsCacheMiddleware,
  eventController.getAnalytics
);

router.use("*", (req, res) => {
  res.status(404).send({ message: "Not Found" });
});

export { router };
