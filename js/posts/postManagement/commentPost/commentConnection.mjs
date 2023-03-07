import {
  api_Base_Url,
  api_Comment_On_Post_Endpoint,
} from "../../../api/api_Url_Endpoints.mjs";
import { commentPost } from "./index.mjs";

export function userPostComment(container, postData) {
  container
    .querySelector("form#commentPostForm")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      commentPost(
        `${api_Base_Url}${api_Comment_On_Post_Endpoint}${postData.id}/comment`
      );
      setTimeout(() => {
        location.reload();
      }, 150);
    });
}
