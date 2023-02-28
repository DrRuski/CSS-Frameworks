import {
  api_Base_Url,
  api_All_Posts_EndPoint,
  api_Create_New_Post_EndPoint,
  api_Delete_Post_EndPoint,
  api_Update_Post_EndPoint,
} from "../api/api_Url_Endpoints.mjs";
import { getPosts } from "./getPosts.mjs";
import { setupPage } from "./setupPage.mjs";
import { searchPosts } from "./postManagement/searchPost/searchPosts.mjs";
import { publishPost } from "./postManagement/createPost/index.mjs";
// import { deletePost } from "./postManagement/deletePost/index.mjs";
// import { updatePost } from "./postManagement/updatePost/index.mjs";
const path = location.pathname;

setupPage(apiUrl);

if (path === "/home.html") {
  //
  searchPosts(
    getPosts,
    `${api_Base_Url}${api_All_Posts_EndPoint}?_author=true`
  );
  //
  const newPostForm = document.querySelector("form#newPostForm");
  newPostForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    await publishPost(`${api_Base_Url}${api_Create_New_Post_EndPoint}`);
    location.reload();
  });
  //
}

//
// export function deleteUserPost(container, postData) {
//   container
//     .querySelector("button#deletePostBtn")
//     .addEventListener("click", (e) => {
//       e.preventDefault();
//       deletePost(`${api_Base_Url}${api_Delete_Post_EndPoint}${postData.id}`);
//       setTimeout(() => {
//         location.reload();
//       }, 250);
//     });
// }
// //
// export function updateUserPost(container, postData) {
//   container
//     .querySelector("form#updatePostForm")
//     .addEventListener("submit", (e) => {
//       e.preventDefault();
//       updatePost(`${api_Base_Url}${api_Update_Post_EndPoint}${postData.id}`);
//       setTimeout(() => {
//         location.reload();
//       }, 250);
//     });
// }
