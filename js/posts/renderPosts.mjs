import { renderPost } from "./renderPost.mjs";
export function renderPosts(postData) {
  if (Array.isArray(postData)) {
    const type = postData.length > 1 ? "multi" : "single";
    postData.forEach((post) => renderPost(post, type));
  } else {
    renderPost(postData);
  }
}
