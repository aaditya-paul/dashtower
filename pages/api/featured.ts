import { NextApiRequest, NextApiResponse } from "next";

const CONTENT_API_URL =
  process.env.GHOST_CONTENT_API_URL ?? "http://localhost:3000";
const CONTENT_API_KEY =
  process.env.GHOST_CONTENT_API_KEY ?? "http://localhost:3000";

// Get All Posts
export default async function getFeaturedPost(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { limit } = req.query;
  const url = `${CONTENT_API_URL}/posts/?key=${CONTENT_API_KEY}&fields=title,slug,feature_image,meta_description,custom_excerpt,excerpt,created_at,updated_at,reading_time,uuid&include=tags,authors&filter=featured:true&limit=${
    limit || 3
  }`;

  try {
    const posts = await fetch(url).then(async (res) => await res.json());

    return res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error });
    throw new Error("Error fetching posts");
  }
}
