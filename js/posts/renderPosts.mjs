import { renderPost } from "./renderPost.mjs";
import { renderSpecificPost } from "./renderSpecificPost.mjs";
export function renderPosts(postData) {
  if (Array.isArray(postData)) {
    const type = postData.length > 1;
    console.log("all posts");
    postData.forEach((post) => renderPost(post));
  } else {
    console.log("single post");
    renderSpecificPost(postData);
  }
}
