export function deletePostSetup(accessToken) {
  return {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
}
