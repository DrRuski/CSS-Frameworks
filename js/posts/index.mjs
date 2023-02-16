import { getPosts } from "./getPosts.mjs";
import { renderPosts } from "./renderPosts.mjs";
import { api_Base_Url, api_All_Posts_EndPoint } from "../api/api_Url_Endpoints.mjs";
import { setupPage } from "./setupPage.mjs";

setupPage(`${api_Base_Url}${api_All_Posts_EndPoint}?_author=true`);
