import { renderPost } from "./renderPost.mjs";
export function renderPosts(postData) {
  postData.forEach(renderPost);
}
