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
    postContainer.innerHTML = "";

    if (selectValue === "allPosts") {
      return renderPosts(postsArray);
    }
    if (selectValue === "newOldPosts") {
      return renderPosts(newOldFilter(postsArray));
    }
    if (selectValue === "oldNewPosts") {
      return renderPosts(oldNewFilter(postsArray));
    }
    if (selectValue === "mostLikedPosts") {
      return renderPosts(getLikedFilter(postsArray));
    }
  });
}
