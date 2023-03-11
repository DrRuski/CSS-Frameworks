import {
  api_Base_Url,
  api_Comment_On_Post_Endpoint,
} from "../../../api/api_Url_Endpoints.mjs";
import { commentPost } from "./index.mjs";

export function userPostComment(container) {
  container
    .querySelector("form#postCommentForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      await commentPost(
        `${api_Base_Url}${api_Comment_On_Post_Endpoint}${container.id}/comment`
      );
      location.reload();
    });
}
