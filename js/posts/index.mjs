import { getPosts } from "./getPosts.mjs";
import {
  api_Base_Url,
  api_All_Posts_EndPoint,
} from "../api/api_Url_Endpoints.mjs";
import { setupPage } from "./setupPage.mjs";
import { searchPosts } from "./postManagement/searchPost/searchPosts.mjs";
const apiUrl = `${api_Base_Url}${api_All_Posts_EndPoint}?_author=true`;

setupPage(apiUrl);
searchPosts(getPosts, apiUrl);
