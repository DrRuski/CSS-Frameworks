import { createNewPostSetup } from "./createNewPostSetup.mjs";
//
//
export async function publishPost(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(url, createNewPostSetup(accessToken));
    console.log(response);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
