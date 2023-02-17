import { renderPosts } from "../../renderPosts.mjs";

export async function searchPosts(postData, url) {
  const postsArray = await postData(url);
  const searchForm = document.querySelector("form#searchForm");
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const searchTerm = form.search.value;
    //
    const term = searchTerm.toLowerCase();
    //
    const filteredPosts = postsArray.filter((post) => {
      const postTitle = post.title.toLowerCase();
      const author = post.author.name.toLowerCase();
      return postTitle.includes(term) || author.includes(term);
    });
    const postContainer = document.querySelector(".write-post");
    postContainer.innerHTML = "";
    renderPosts(filteredPosts);
  });
}
