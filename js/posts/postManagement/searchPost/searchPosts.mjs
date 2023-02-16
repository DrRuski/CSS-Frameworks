import { createPost } from "../../writePosts.mjs";
const userInput = document.getElementById("search-input");

//
export function searchPosts(postData) {
  //
  userInput.addEventListener("search", (inputText) => {
    inputText.preventDefault();
    const userInputText = JSON.stringify(inputText.value.toLowerCase());
    //
  });

  //
  newPostDataArray(postData);
  //

  //
  //   newPostDataArray.find((post) => {
  //     if (postTitle === inputText) {
  //     }
  //   });
  //

  //
}

function newPostDataArray(postData) {
  postData.map((e) => {
    const postTitle = JSON.stringify(e.title.toLowerCase());
    const postAuthor = JSON.stringify(e.author.name.toLowerCase());
  });
}
