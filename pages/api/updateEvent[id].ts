// pages/api/createTask.js
import fs from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import events from "../../data/events.json";
import cors, { runMiddleware } from "../../utils/cors";

const eventsFilePath = path.join(
  process.cwd(),
  "dummy-data",
  "dummy-data.json"
);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await runMiddleware(req, res, cors);
  const { id } = req.query;
  const { title, description } = req.body;
  const taskIndex = events.findIndex((t) => t.id === id);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  const updatedTask = {
    ...events[taskIndex],
    title,
    description,
  };

  events[taskIndex] = updatedTask;

  fs.writeFileSync(eventsFilePath, JSON.stringify(events, null, 2));

  res.status(200).json(updatedTask);
}
