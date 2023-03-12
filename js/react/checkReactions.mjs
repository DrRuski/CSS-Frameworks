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
