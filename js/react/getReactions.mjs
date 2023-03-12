import { checkReactions } from "./checkReactions.mjs";
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
