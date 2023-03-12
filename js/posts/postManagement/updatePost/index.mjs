import { updatePostHeader } from "./updatePostSetup.mjs";
/**
 * Fetches API data.
 * @param {string} url API url to fetch post array from.
 * @returns API json data.
 */
export async function updatePost(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(url, updatePostHeader(accessToken));
    console.log(response);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
