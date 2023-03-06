import { renderPosts } from "../../../renderPosts.mjs";
import { getDateFilter } from "../filterTerms/getTerms.mjs";
const newOldPosts = document.getElementById("newOld");

export function filterAllPosts(postArray) {
  newOldPosts.addEventListener("click", (e) => {
    e.preventDefault();
    newOldPosts.classList.toggle("btn-primary");
    return renderPosts(getDateFilter(postArray));
  });
}
