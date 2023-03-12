import {
  api_Base_Url,
  api_Update_Post_EndPoint,
} from "../../../api/api_Url_Endpoints.mjs";
import { updatePost } from "./index.mjs";
/**
 * Sets up an event listener for updating a user's post.
 * @param {HTMLElement} container The container element that contains the form for updating the post.
 * @param {object} postData The data of the post being updated.
 * @param {number} postData.id ID of the post being updated.
 */
export function updateUserPost(container, postData) {
  container
    .querySelector("form#updatePostForm")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      updatePost(`${api_Base_Url}${api_Update_Post_EndPoint}${postData.id}`);
      setTimeout(() => {
        location.reload();
      }, 250);
    });
}
