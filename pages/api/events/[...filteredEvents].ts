// pages/api/task/[id].js
import { NextApiRequest, NextApiResponse } from "next";

import events from "../../../data/events.json";
import cors, { runMiddleware } from "../../../utils/cors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await runMiddleware(req, res, cors);
  const { filteredEvents } = req.query;
  const year = filteredEvents[0] as unknown as number;
  const month = filteredEvents[1] as unknown as number;
  const filterEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate.getFullYear() == year && eventDate.getMonth() == month - 1;
  });

  if (!filterEvents.length) {
    res.status(404).json({ error: "Event not found" });
  } else {
    res.status(200).json(filterEvents);
  }
}
