/**
 * Takes in postData from getReactions to check if the post has any reactions
 * @param {string} postData
 * @param {Object} reactContainer
 * @param {Object} container
 * Creates a div using reactContainer, then appends the div to the container.
 * If the reaction already exist, adds a +1 counter to the reaction.
 */
export function checkReactions(postData, reactContainer, container) {
  container.querySelector(".title-reactions").innerText = "Reactions";
  postData.reactions.forEach((element) => {
    if (element) {
      const newReact = document.createElement("div");
      const reactions = element.symbol;
      newReact.innerText += reactions;
      if (element.count > 1) {
        newReact.innerText += element.count;
      }
      reactContainer.appendChild(newReact);
    }
  });
}
