import { deletePostSetup } from "./deletePostSetup.mjs";
//
export async function deletePost(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const response = await fetch(url, deletePostSetup(accessToken));
    return await response.json();
  } catch (error) {
    console.log(error);
  }
}
