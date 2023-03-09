import { api_Base_Url, api_All_Posts_EndPoint } from "../api/api_Url_Endpoints.mjs";

const url = `${api_Base_Url}${api_All_Posts_EndPoint}?_reactions=true`;
console.log(url);
export async function getPosts(url) {
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
    // console.log(postData);
    checkReactions(postData);
  } catch (error) {
    console.log(error);
  }
}
getPosts(url);
function checkReactions(postData) {
  postData.forEach((element) => {
    if (element._count.reactions) {
      console.log(element.reactions);
    }
  });
}
// Work in Progress
