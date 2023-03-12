import { userCommentInput } from "./userComment.mjs";

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
