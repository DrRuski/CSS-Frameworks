import { commentHeader } from "./header.mjs";

/**
 * Sends the information to the API.
 * @param {string} url Entire API url with endpoint.
 * @param {string} accessToken Users access token.
 * @returns Returns the response from fetch.
 */

export async function commentPost(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(url, commentHeader(accessToken));
    console.log(response);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
