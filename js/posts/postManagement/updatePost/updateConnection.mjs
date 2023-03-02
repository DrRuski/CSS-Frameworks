import {
  api_Base_Url,
  api_Update_Post_EndPoint,
} from "../../../api/api_Url_Endpoints.mjs";
import { updatePost } from "./index.mjs";

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
