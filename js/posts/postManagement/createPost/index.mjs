import { createNewPostSetup } from "./createNewPostSetup.mjs";
//
//
export async function publishPost(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(url, createNewPostSetup(accessToken));
    const postData = await response.json();
    return postData;
  } catch (error) {
    console.log(error);
  }
}
