import { commentHeader } from "./header.mjs";

export async function commentPost(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(url, commentHeader(accessToken));
    console.log(response);
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
