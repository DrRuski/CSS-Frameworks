import { userContentUpdate } from "./postContentUpdate.mjs";
/**
 * Creates a header for updating a post.
 * @param {string} accessToken The access token for the user making the request.
 * @returns {object} The header for updating a post.
 */
export function updatePostHeader(accessToken) {
  return {
    method: "PUT",
    body: userContentUpdate(),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    },
  };
}
