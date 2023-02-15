import { createPost } from "./writePosts.mjs";
// import { searchPosts } from "./postManagement/searchPost/searchPosts.mjs";
const searchInput = document.getElementById("search-input");

// Get top 100 posts no filter
export async function fetchPosts(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, getData);
    const postData = await response.json();
    postData.map(createPost);
    //
    //
    //
    searchInput.addEventListener("search", (inputText) => {
      //
      const userInput = JSON.stringify(inputText.value.toLowerCase());
      //
      const testing = postData.find((post) => {
        const postTitle = JSON.stringify(post.title[0].toLowerCase());
        if (postTitle === userInput) {
          return true;
        }
      });
      //
      console.log(testing);
    });

    //
    //
    //
  } catch (error) {
    console.log(error);
  }
}
