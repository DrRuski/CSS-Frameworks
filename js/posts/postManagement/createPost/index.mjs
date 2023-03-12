import { createNewPostSetup } from "./createNewPostSetup.mjs";
//
/**
 * 
 * @param {string} url Entire API url with endpoint.
 * @returns Returns the response from fetch.
 */
//
export async function publishPost(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(url, createNewPostSetup(accessToken));
    if (!response.ok) {
      return alert("Something Went Wrong, Check Your Inputs and Try Again.");
    }
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
