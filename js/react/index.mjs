import { api_Base_Url, api_All_Posts_EndPoint } from "../api/api_Url_Endpoints.mjs";

// const url = `${api_Base_Url}${api_All_Posts_EndPoint}/4392?_reactions=true`;
export async function getReactions(url) {
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
function checkReactions(postData) {
  const container = document.querySelector(".show-reactions");
  console.log(container);
  postData.reactions.forEach((element) => {
    if (element) {
      console.log(element.symbol);
      container.innerHTML += `<div>${element.symbol}</div>`;
    }
  });
}
