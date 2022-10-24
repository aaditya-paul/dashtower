import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
): void {
  try {
    return res.status(200).json({ message: "API is Working 🚀" });
  } catch (error) {
    res.status(500).json({ error });
    throw new Error("Error");
  }
}
