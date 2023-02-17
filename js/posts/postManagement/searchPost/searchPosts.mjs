import { getPosts } from "../../getPosts.mjs";
import {
  api_Base_Url,
  api_All_Posts_EndPoint,
} from "../../../api/api_Url_Endpoints.mjs";
const url = `${api_Base_Url}${api_All_Posts_EndPoint}`;

export async function searchTerm() {
  const postsArray = await getPosts(url);
  const searchForm = document.querySelector("form#searchForm");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const searchTerm = form.search.value;
    //
    const term = searchTerm.toLowerCase();
    //
    const filteredPosts = postsArray.filter((post) => {
      //
      const postTitle = post.title.toLowerCase();
      return postTitle.includes(term);
    });
    console.log(filteredPosts);
  });
}
