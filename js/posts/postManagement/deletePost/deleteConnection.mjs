import {
  api_Base_Url,
  api_Delete_Post_EndPoint,
} from "../../../api/api_Url_Endpoints.mjs";
import { deletePost } from "./index.mjs";

/**
 * Deletes a user created post.
 * @param {HTMLElement} container Post container.
 * @param {Array} postData API posts array.
 */

export function deleteUserPost(container, postData) {
  container
    .querySelector("button#deletePostBtn")
    .addEventListener("click", (e) => {
      e.preventDefault();
      deletePost(`${api_Base_Url}${api_Delete_Post_EndPoint}${postData.id}`);
      setTimeout(() => {
        location.reload();
      }, 250);
    });
}
