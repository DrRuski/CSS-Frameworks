import { renderPost } from "./renderPost.mjs";
import { renderSpecificPost } from "./renderSpecificPost.mjs";
import { checkFollowing } from "../followUnfollowUser/checkFollowing.mjs";
import { checkFollow } from "../followUnfollowUser/index.mjs";
import { followButton } from "../followUnfollowUser/followButton.mjs";

export function renderPosts(postData) {
  if (Array.isArray(postData)) {
    const type = postData.length > 1;
    postData.forEach((post) => renderPost(post));
    checkFollowing(checkFollow);
    followButton();
  } else {
    renderSpecificPost(postData);
  }
}
