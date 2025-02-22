import mongoose from "mongoose";

export const EventSchema = new mongoose.Schema(
  {
    name: String,
    requestUrl: String,
    requestDuration: String,
  },
  {
    timestamps: true,
  }
);

const EventsModel = mongoose.model("Event", EventSchema);

export { EventsModel };
