import { api_Base_Url, api_All_Posts_EndPoint, api_Create_New_Post_EndPoint } from "../api/api_Url_Endpoints.mjs";
import { getPosts } from "./getPosts.mjs";
import { setupPage } from "./setupPage.mjs";
import { searchPosts } from "./postManagement/searchPost/searchPosts.mjs";
import { publishPost } from "./postManagement/createPost/index.mjs";
import { filterPosts } from "./postManagement/filterPost/filterPosts.mjs";
/**
 * @param {setupPage} - Setups the page using renderPosts to check if it's one post or several,
 * then uses renderPost or renderSpecificPost.
 */
setupPage(`${api_Base_Url}${api_All_Posts_EndPoint}?_author=true&_reactions=true`);
searchPosts(getPosts, `${api_Base_Url}${api_All_Posts_EndPoint}?_author=true`);
filterPosts(getPosts, `${api_Base_Url}${api_All_Posts_EndPoint}?_author=true`);

document.querySelector("form#newPostForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  await publishPost(`${api_Base_Url}${api_Create_New_Post_EndPoint}`);
  location.reload();
});
//
