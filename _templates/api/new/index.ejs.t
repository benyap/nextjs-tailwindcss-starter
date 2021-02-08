---
to: src/pages/api/<%=name%>.ts
---
import { NextApiRequest, NextApiResponse } from "next";

export default (request: NextApiRequest, response: NextApiResponse) => {
  // TODO:
  // Restrict API request method
  // if (request.method !== "POST") return response.status(404).end();

  return response.status(200).end();
};
