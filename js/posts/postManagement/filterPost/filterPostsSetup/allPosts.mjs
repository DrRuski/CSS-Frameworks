import { renderPosts } from "../../../renderPosts.mjs";
const allPosts = document.getElementById("allPosts");

export function filterAllPosts(postArray) {
  allPosts.addEventListener("click", (e) => {
    e.preventDefault();
    allPosts.classList.toggle("btn-primary");
    return renderPosts(postArray);
  });
}
