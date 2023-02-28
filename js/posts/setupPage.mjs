import { getPosts } from "./getPosts.mjs";
import { renderPosts } from "./renderPosts.mjs";

export async function setupPage(url) {
  const postData = await getPosts(url);
  renderPosts(postData);
}
