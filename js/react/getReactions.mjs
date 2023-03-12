import { checkReactions } from "./checkReactions.mjs";
/**
 * Takes a url and checks which reactions a specific post has.
 * @param {string} url
 */
export async function getReactions(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, getData);
    const postData = await response.json();
    checkReactions(postData);
  } catch (error) {
    console.log(error);
  }
}
