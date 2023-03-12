import { userPostInput } from "./userPostInput.mjs";

/**
 * Creates a header for creating a post.
 * @param {string} accessToken Logged inn users access token.
 * @returns This returns API header configurations.
 */

export function createNewPostSetup(accessToken) {
  return {
    method: "POST",
    body: userPostInput(),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    },
  };
}
