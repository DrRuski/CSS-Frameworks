import { getPosts } from "../../getPosts.mjs";
import { getPostTitle } from "./getPostTitle.mjs";
import { renderPost } from "../../renderPost.mjs";

const userInput = document.getElementById("search-input");

//
//
//









// MAIN FUNCTION TO RULE THEM ALL //

userInput.addEventListener("click", (e) => {
  const form = document.getElementById("searchForm");
  const formData = new FormData(form);
  const userSearch = formData.get("search");
  // const userSearch = formData.get(JSON.stringify(e.value.toLowerCase()));
});





 



