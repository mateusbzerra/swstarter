interface Event {
  name: string;
  requestUrl: string;
  requestTimeStarted: Date;
  requestTimeEnded: Date;
}

const EVENTS_QUEUE_URL = "http://localhost:3001/events";

export const logAnalyticsEvent = async (props: Event) => {
  const { requestTimeStarted, requestTimeEnded, ...event } = props;
  const reqDurationInMS =
    requestTimeEnded.getTime() - requestTimeStarted.getTime();

  await fetch(EVENTS_QUEUE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...event, requestDuration: `${reqDurationInMS}ms` }),
  });
};
