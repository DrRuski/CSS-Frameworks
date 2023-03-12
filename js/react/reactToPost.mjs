import { api_Base_Url, api_All_Posts_EndPoint } from "../api/api_Url_Endpoints.mjs";
import { getReactions } from "./getReactions.mjs";
import { addReactionToPost } from "./addReactionToPost.mjs";
const url = `${api_Base_Url}${api_All_Posts_EndPoint}`;

/**
 * Eventlistner listening to "react" button on home.html
 * @param {string} emoji - The emoji the users clicks
 * @param {string} id - Id of the post reacted on
 * @param {string} urlReact - Creates URL with the ID and Emoji the user has clicked on
 * @param {function addReactionToPost(urlReact)} - Starts the function with urlReact
 */
export function reactToPost() {
  const reactButton = document.querySelectorAll(".react");
  reactButton.forEach((element) => {
    element.addEventListener("click", (element) => {
      const emoji = element.target.innerHTML;
      const id = element.target.parentElement.parentElement.getAttribute("data-id");
      const urlReact = `${url}/${id}/react/${emoji}`;
      addReactionToPost(urlReact);
    });
  });
}
