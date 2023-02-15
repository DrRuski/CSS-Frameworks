import { createPost } from "./writePosts.mjs";

// Get top 100 posts no filter
export async function fetchPosts(url) {
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
    postData.map(createPost);
  } catch (error) {
    console.log(error);
  }
}
