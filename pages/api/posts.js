// Write a hello world API endpoint
const CONTENT_API_URL = process.env.GHOST_CONTENT_API_URL;
const CONTENT_API_KEY = process.env.GHOST_CONTENT_API_KEY;

// Get All Posts
export default async function getAllPosts(req, res) {
  const url = `${CONTENT_API_URL}/posts/?key=${CONTENT_API_KEY}&fields=title,slug,feature_image,meta_description,custom_excerpt,excerpt,created_at,updated_at,reading_time,uuid&include=tags,authors`;
  const posts = await fetch(url).then((res) => res.json());

  res.status(200).json(posts);
}
