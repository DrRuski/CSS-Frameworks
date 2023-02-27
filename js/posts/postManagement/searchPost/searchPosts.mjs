import { renderPosts } from "../../renderPosts.mjs";
import { getSearchTerms } from "./getTerms.mjs";
import { postNotFoundError } from "./postNotFound.mjs";

export async function searchPosts(postData, url) {
  const postsArray = await postData(url);
  const searchForm = document.querySelector("input#searchInput");
  const postContainer = document.querySelector(".write-post");
  //
  searchForm.addEventListener("input", onSearch);
  //
  function onSearch(e) {
    e.preventDefault();
    const searchTerm = e.target.value;
    const term = searchTerm.toLowerCase();
    if (!term.length) {
      postContainer.innerHTML = "";
      return renderPosts(postsArray);
    }
    //
    if (term.length < 3) {
      return;
    }
    //
    postContainer.innerHTML = "";
    //
    if (getSearchTerms(postsArray, term).length) {
      return renderPosts(getSearchTerms(postsArray, term));
    } else {
      return postNotFoundError(postContainer);
    }
  }
  //
}
