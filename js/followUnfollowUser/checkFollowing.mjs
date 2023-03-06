import { isFollowing } from "./isFollowing.mjs";

export async function checkFollowing(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const getData = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, getData);
    const postData = await response.json();
    isFollowing(postData);
  } catch (error) {
    console.log(error);
  }
}
