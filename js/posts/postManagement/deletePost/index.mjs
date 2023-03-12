import { deletePostSetup } from "./deletePostSetup.mjs";

/**
 * 
 * @param {string} url Entire API url with endpoint.
 * @returns Returns the response from fetch.
 */

export async function deletePost(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(url, deletePostSetup(accessToken));
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
