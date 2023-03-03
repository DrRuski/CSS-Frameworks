import { renderPost } from "../posts/renderPost.mjs";
export function renderUserPosts(postData) {
  postData.forEach((post) => renderPost(post));
}
