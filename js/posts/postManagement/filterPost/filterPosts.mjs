// import { renderPosts } from "../../renderPosts.mjs";
// const newOld = document.querySelector("a#newOld");
// const oldNew = document.querySelector("a#oldNew");

// export async function filterPosts(postData, url) {
//   const postsArray = await postData(url);

//   searchForm.addEventListener("click", (e) => {
//     e.preventDefault();
//     const form = e.target;
//     const searchTerm = form.search.value;
//     //
//     const term = searchTerm.toLowerCase();
//     //
//     const filteredPosts = postsArray.filter((post) => {
//       const postTitle = post.title.toLowerCase();
//       const author = post.author.name.toLowerCase();
//       return postTitle.includes(term) || author.includes(term);
//     });
//     const postContainer = document.querySelector(".write-post");
//     postContainer.innerHTML = "";
//     renderPosts(filteredPosts);
//   });
// }
