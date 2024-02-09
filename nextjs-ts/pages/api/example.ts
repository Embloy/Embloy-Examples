import { NextApiRequest, NextApiResponse } from "next";
import { EmbloyClient, EmbloySession } from "embloy";
import Cors from "cors";

// Initialize the cors middleware
const cors = Cors({
  methods: ["POST"],
});

// Helper method to handle CORS
function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors);

  if (req.method === "POST") {
    const clientToken = process.env.CLIENT_TOKEN;
    const jobSlug = req.query.job_slug as string;

    try {
      // Some input validation ...
      if (!clientToken) {
        res.status(400).json({ error: "client_token is required" });
        return;
      }

      if (!jobSlug) {
        res.status(400).json({ error: "job_slug is required" });
        return;
      }

      // Call the Embloy SDK to request a link to an application session
      const embloy = new EmbloyClient(
        clientToken,
        new EmbloySession("job", jobSlug)
      );
      const url = await embloy.makeRequest();

      // Return the URL to the client
      res.status(200).json({ url: url });
    } catch (error) {
      console.error("Error making request:", error);
      res.status(500).json({ error: "Error making request" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
