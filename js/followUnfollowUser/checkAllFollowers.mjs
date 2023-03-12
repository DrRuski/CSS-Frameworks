import { checkFollowers } from "./index.mjs";
import { setupRenderFollowers } from "./setupRenderFollowers.mjs";
export async function checkAllFollowers(url) {
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
    const followers = postData.followers;
    setupRenderFollowers(followers);
  } catch (error) {
    console.log(error);
  }
}
