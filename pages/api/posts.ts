import { NextApiRequest, NextApiResponse } from "next";

const CONTENT_API_URL = "https://cms.upexperiment.com";
const CONTENT_API_KEY = "9812529efa4bf97fd63a4edd19";

// Get All Posts
export default async function getAllPosts(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { limit } = req.query;
  const url = `${CONTENT_API_URL}/ghost/api/content/posts/?key=${CONTENT_API_KEY}&includefields=title,slug,feature_image,meta_description,custom_excerpt,excerpt,created_at,updated_at,reading_time,uuid&include=tags,authors&limit=${
    limit || 15
  }`;
  try {
    const posts = await fetch(url).then(async (res) => await res.json());

    return res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error });
    console.log(error);

    throw new Error("Error fetching posts");
  }
}
