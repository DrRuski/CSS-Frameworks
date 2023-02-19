import { renderPosts } from "../../renderPosts.mjs";
import { getSearchTerms } from "./getTerms.mjs";
import { postNotFoundError } from "./postNotFound.mjs";

export async function searchPosts(postData, url) {
  const postsArray = await postData(url);
  const searchForm = document.querySelector("form#searchForm");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const searchTerm = form.search.value;
    const term = searchTerm.toLowerCase();
    const postContainer = document.querySelector(".write-post");
    postContainer.innerHTML = "";
    if (getSearchTerms(postsArray, term).length) {
      renderPosts(getSearchTerms(postsArray, term));
    } else {
      postNotFoundError(postContainer);
    }
  });
}
