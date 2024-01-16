import type { NextApiRequest, NextApiResponse } from "next";
import events from "../../data/events.json";

import cors, { runMiddleware } from "../../utils/cors";

type ResponseData = {
  events: any[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await runMiddleware(req, res, cors);
  if (req.headers.isfeatured) {
    res.status(200).json({
      events: events.filter((event) => event.isFeatured),
    });
  } else {
    res.status(200).json({
      events: events,
    });
  }
}
