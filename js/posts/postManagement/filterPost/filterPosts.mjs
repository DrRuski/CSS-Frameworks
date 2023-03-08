import { renderPosts } from "../../renderPosts.mjs";
import {
  getLikedFilter,
  newOldFilter,
  oldNewFilter,
} from "./filterTerms/getTerms.mjs";

export async function filterPosts(postData, url) {
  const postsArray = await postData(url);
  const postsFilter = document.querySelector("select#postsFilter");
  const postContainer = document.querySelector(".write-post");

  postsFilter.addEventListener("change", (e) => {
    const selectValue = postsFilter.value;

    if (selectValue === "allPosts") {
      postContainer.innerHTML = "";
      return renderPosts(postsArray);
    }
    if (selectValue === "newOldPosts") {
      postContainer.innerHTML = "";
      return renderPosts(newOldFilter(postsArray));
    }
    if (selectValue === "oldNewPosts") {
      postContainer.innerHTML = "";
      return renderPosts(oldNewFilter(postsArray));
    }
    if (selectValue === "mostLikedPosts") {
      postContainer.innerHTML = "";
      return renderPosts(getLikedFilter(postsArray));
    }
  });
}
