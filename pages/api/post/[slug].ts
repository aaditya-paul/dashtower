import { NextApiRequest, NextApiResponse } from "next";
const CONTENT_API_URL =
  process.env.GHOST_CONTENT_API_URL ?? "http://localhost:3000";
const CONTENT_API_KEY =
  process.env.GHOST_CONTENT_API_KEY ?? "http://localhost:3000";

// Get All Posts
export default async function getPost(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const { slug } = req.query;
    const url = `${CONTENT_API_URL}/posts/slug/${slug}/?key=${CONTENT_API_KEY}&include=tags,authors`;
    const post = await fetch(url).then(async (res) => await res.json());

    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error });
    throw new Error("Error");
  }
}
