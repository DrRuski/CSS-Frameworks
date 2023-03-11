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
    console.log(postData);
    checkReactions(postData);
  } catch (error) {
    console.log(error);
  }
}
// export function checkReactions(postData, reactContainer, container) {
//   container.querySelector(".title-reactions").innerText = "Reactions";
//   postData.reactions.forEach((element) => {
//     if (element) {
//       const reactions = element.symbol;
//       console.log(element);
//       reactContainer.innerText += reactions;
//       if (element.count > 1) {
//         reactContainer.innerText += element.count;
//       }
//     }
//   });
// }
export function checkReactions(postData, reactContainer, container) {
  container.querySelector(".title-reactions").innerText = "Reactions";
  postData.reactions.forEach((element) => {
    if (element) {
      const newReact = document.createElement("div");
      const reactions = element.symbol;
      // console.log(element);
      newReact.innerText += reactions;
      if (element.count > 1) {
        newReact.innerText += element.count;
      }
      reactContainer.appendChild(newReact);
    }
  });
}

// const postContainer = document.querySelector(".write-post");
// const container = document.createElement("div");
// container.setAttribute("id", postData.id);
// container.classList.add("col-12", "col-md-6", "col-lg-4");
// container.dataset.id = postData.id;
// postContainer.appendChild(container);

// const id = postData.id;
// const container = document.querySelector("#id").querySelector(".show-reactions");
// console.log(reactionsContainer);
// postData.reactions.forEach((element) => {
//   if (element) {
//     // reactionsContainer.innerHTML += `<div>${element.symbol}</div>`;
//     const reactions = element.symbol;
//     // console.log("element symbol: " + react);
//     return reactions;
//   }
// });
