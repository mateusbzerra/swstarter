import { NextFunction, Request, Response } from "express";
import { redisClient } from "../redis.config";

export const analyticsCacheMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = await redisClient.get("analytics");

  if (!data) {
    next();
    return;
  }
  res.json(JSON.parse(data));
};
