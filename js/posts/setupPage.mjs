import { getPosts } from "./getPosts.mjs";
import { renderPosts } from "./renderPosts.mjs";

export async function setupPage(url) {
  const postsData = await getPosts(url);
  renderPosts(postsData);
}
