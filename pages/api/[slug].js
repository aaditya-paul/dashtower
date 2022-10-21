// Write a hello world API endpoint
const CONTENT_API_URL = process.env.GHOST_CONTENT_API_URL;
const CONTENT_API_KEY = process.env.GHOST_CONTENT_API_KEY;

// Get All Posts
export default async function getPost(req, res) {
  const { slug } = req.query;
  const url = `${CONTENT_API_URL}/posts/slug/${slug}/?key=${CONTENT_API_KEY}&fields=title,slug,feature_image,meta_description,custom_excerpt,created_at,updated_at,reading_time,html`;
  const post = await fetch(url).then((res) => res.json());

  res.status(200).json(post);
}
