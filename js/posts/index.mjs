import { fetchPosts } from "./fetchPosts.mjs";
import { api_Base_Url, api_All_Posts_EndPoint } from "../api/api_Url_Endpoints.mjs";

fetchPosts(`${api_Base_Url}${api_All_Posts_EndPoint}?_author=true`);
// Use _flag paratemeter to access author, comments and reactions
