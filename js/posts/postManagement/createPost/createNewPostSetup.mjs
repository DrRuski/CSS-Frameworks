import { userPostInput } from "./userPostInput.mjs";
export function createNewPostSetup(accessToken) {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      Authorization: `Bearer ${accessToken}`,
    },
    body: `${userPostInput}`,
  };
}
