import { checkFollowing } from "./checkFollowing.mjs";
import { checkFollow } from "./index.mjs";

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
    console.log(postData.following);
    checkFollowing(checkFollow);
  } catch (error) {
    console.log(error);
  }
}
