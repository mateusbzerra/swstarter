import Redis from "ioredis";

const redisClient = new Redis({
  port: Number(process.env.REDIS_PORT || 6379),
  host: process.env.REDIS_HOST || "127.0.0.1",
});

export { redisClient };
