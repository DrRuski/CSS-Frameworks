/**
 * Creates a header for deleting a post.
 * @param {string} accessToken Logged inn users access token.
 * @returns This returns API header configurations.
 */

export function deletePostSetup(accessToken) {
  return {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
}
