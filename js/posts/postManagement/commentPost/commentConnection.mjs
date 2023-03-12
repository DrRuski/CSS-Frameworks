import {
  api_Base_Url,
  api_Comment_On_Post_Endpoint,
} from "../../../api/api_Url_Endpoints.mjs";
import { commentPost } from "./index.mjs";
const apiEndpoint = "/comment";

/**
 * Sends comment to the API.
 * @param {*} container Post container.
 * @param {string} api_Base_Url API url without any specific endpoint.
 * @param {string} api_Comment_On_Post_Endpoint Specified API endpoint.
 * @param {number} container.id Post ID.
 * @param {string} apiEndpoint To fully complete the endpoint url, this has to be added at the end.
 */

export function userPostComment(container) {
  container
    .querySelector("form#postCommentForm")
    .addEventListener("submit", async (e) => {
      e.preventDefault();
      await commentPost(
        `${api_Base_Url}${api_Comment_On_Post_Endpoint}${container.id}${apiEndpoint}`
      );
      location.reload();
    });
}
