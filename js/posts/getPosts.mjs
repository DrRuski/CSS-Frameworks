import { renderPosts } from "./renderPosts.mjs";

export async function getPosts(url) {
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
    renderPosts(postData);
  } catch (error) {
    console.log(error);
  }
}
