import { userContentUpdate } from "./postContentUpdate.mjs";

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
