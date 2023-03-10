import { api_Base_Url, api_All_Posts_EndPoint } from "../api/api_Url_Endpoints.mjs";
import { getReactions } from "./index.mjs";
import { addReactionToPost } from "./addReactionToPost.mjs";
const url = `${api_Base_Url}${api_All_Posts_EndPoint}`;

export function reactToPost() {
  const reactButton = document.querySelectorAll(".react");
  //   console.log(reactButton);
  reactButton.forEach((element) => {
    element.addEventListener("click", (element) => {
      const emoji = element.target.innerHTML;
      const id = element.target.parentElement.parentElement.getAttribute("data-id");
      const urlReact = `${url}/${id}/react/${emoji}`;
      addReactionToPost(urlReact);
      getReactions(`${api_Base_Url}${api_All_Posts_EndPoint}/${id}?_reactions=true`);
    });
  });
}
