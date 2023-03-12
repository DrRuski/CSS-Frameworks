import { checkFollowing } from "./checkFollowing.mjs";
import { checkFollow } from "./index.mjs";
/**
 * Takes the url and sends a request to the server to follow or unfollow the user from the url
 * @param {string} url
 */
export async function followUnfollowUser(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const getData = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, getData);
    const postData = await response.json();
    checkFollowing(checkFollow);
  } catch (error) {
    console.log(error);
  }
}
