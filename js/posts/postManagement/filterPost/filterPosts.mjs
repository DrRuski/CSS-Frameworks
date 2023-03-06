import { renderPosts } from "../../renderPosts.mjs";
import { filterAllPosts } from "./filterPostsSetup/allPosts.mjs";
import { getDateFilter, getLikedFilter } from "./filterTerms/getTerms.mjs";

const oldNewPosts = document.querySelector("button#oldNew");
const mostLikedPosts = document.querySelector("button#mostLiked");

export async function filterPosts(postData, url) {
  const postArray = await postData(url);
  //
  filterAllPosts(postArray);
  //

  //

  console.log(getLikedFilter(postArray));
}
