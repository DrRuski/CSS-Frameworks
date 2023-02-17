import { getPosts } from "./getPosts.mjs";
import { renderPosts } from "./renderPosts.mjs";
import { setupPage } from "./setupPage.mjs";
import { api_Base_Url, api_Single_Post_EndPoint } from "../api/api_Url_Endpoints.mjs";
import { getParam } from "./getParam.mjs";
const id = 3019;
// console.log(`${api_Base_Url}${api_Single_Post_EndPoint}/${id}?_author=true`);
getParam();
setupPage(`${api_Base_Url}${api_Single_Post_EndPoint}/${id}?_author=true`);
