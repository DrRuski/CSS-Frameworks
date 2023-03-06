import { api_Base_Url, api_All_Posts_EndPoint, api_Create_New_Post_EndPoint } from "../api/api_Url_Endpoints.mjs";
import { getPosts } from "./getPosts.mjs";
import { setupPage } from "./setupPage.mjs";
import { searchPosts } from "./postManagement/searchPost/searchPosts.mjs";
import { publishPost } from "./postManagement/createPost/index.mjs";
//
setupPage(`${api_Base_Url}${api_All_Posts_EndPoint}?_author=true`);
//
searchPosts(getPosts, `${api_Base_Url}${api_All_Posts_EndPoint}?_author=true`);
//
const newPostForm = document.querySelector("form#newPostForm");
newPostForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  await publishPost(`${api_Base_Url}${api_Create_New_Post_EndPoint}`);
  location.reload();
});
