import {
  api_Base_Url,
  api_All_Posts_EndPoint,
  api_Create_New_Post_EndPoint,
} from "../api/api_Url_Endpoints.mjs";
import { getPosts } from "./getPosts.mjs";
import { setupPage } from "./setupPage.mjs";
import { searchPosts } from "./postManagement/searchPost/searchPosts.mjs";
import { publishPost } from "./postManagement/createPost/index.mjs";
import { filterPosts } from "./postManagement/filterPost/filterPosts.mjs";
//
setupPage(`${api_Base_Url}${api_All_Posts_EndPoint}?_author=true&_comments=true`);
//
searchPosts(getPosts, `${api_Base_Url}${api_All_Posts_EndPoint}?_author=true`);
//
filterPosts(getPosts, `${api_Base_Url}${api_All_Posts_EndPoint}?_author=true`);
//
document
  .querySelector("form#newPostForm")
  .addEventListener("submit", async (e) => {
    e.preventDefault();
    await publishPost(`${api_Base_Url}${api_Create_New_Post_EndPoint}`);
    location.reload();
  });
//
