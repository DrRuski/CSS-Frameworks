import { fetchPosts } from "./fetchPosts.mjs";
import { baseUrl } from "./fetchPosts.mjs";

fetchPosts(baseUrl + "/api/v1/social/posts");
