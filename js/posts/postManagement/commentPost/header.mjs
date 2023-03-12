import { userCommentInput } from "./userComment.mjs";

/**
 * @param {*} accessToken Logged inn users access token.
 * @returns This returns API header configurations.
 */

export function commentHeader(accessToken) {
  return {
    method: "POST",
    body: userCommentInput(),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    },
  };
}
