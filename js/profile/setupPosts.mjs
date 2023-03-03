import { getPosts } from "../posts/getPosts.mjs";
import { renderUserPosts } from "./renderUserPosts.mjs";

export async function setupPosts(url) {
  const postData = await getPosts(url);
  renderUserPosts(postData);
}
