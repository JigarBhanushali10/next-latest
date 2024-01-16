// pages/api/task/[id].js
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import events from "../../../data/events.json";

import cors, { runMiddleware } from "../../../utils/cors";

const eventsFilePath = path.join(process.cwd(), "data", "events.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await runMiddleware(req, res, cors);
  const { id } = req.query;
  const event = events.find((t) => t.id === id);
  switch (req.method) {
    case "GET":
      res.status(200).json(event);

      break;
    case "DELETE":
      const eventIndex = events.findIndex((t) => t.id === id);

      const deletedTask = events.splice(eventIndex, 1)[0];

      fs.writeFileSync(eventsFilePath, JSON.stringify(events, null, 2));

      res.status(200).json(deletedTask);
      break;
    case "PUT":
      // pages/api/events/[id].js

      const { title, description, address, date, image, isFeatured } =
        JSON.parse(req.body);
      const updateEventIndex = events.findIndex((t) => t.id === id);
      const updatedTask = {
        ...event[updateEventIndex],
        id,
        title,
        description,
        address,
        date,
        image,
        isFeatured,
      };

      events[updateEventIndex] = updatedTask;

      fs.writeFileSync(eventsFilePath, JSON.stringify(events, null, 2));

      res.status(200).json(updatedTask);

      break;
  }

  if (!event) {
    res.status(404).json({ error: "Event not found" });
  }
}
