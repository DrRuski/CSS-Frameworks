import { userContentUpdate } from "./postContentUpdate.mjs";

export function updatePostHeader(accessToken) {
  return {
    method: "PUT",
    body: userContentUpdate(),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
}
