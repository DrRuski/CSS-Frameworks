import { userContentUpdate } from "./postContentUpdate.mjs";

export function updatePostHeader(accessToken) {
  return {
    method: "PUT",
    body: JSON.stringify({
      title: "Updated Title",
      body: "Updated Body",
      tags: ["string"],
      media: "https://img-9gag-fun.9cache.com/photo/ago3nqw_700bwp.webp",
    }),
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
}
