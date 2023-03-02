import {
  api_Base_Url,
  api_Delete_Post_EndPoint,
} from "../../../api/api_Url_Endpoints.mjs";
import { deletePost } from "./index.mjs";

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
