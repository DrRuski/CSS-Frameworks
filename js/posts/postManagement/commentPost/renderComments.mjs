export function renderComments(postData) {
  postData.forEach((comment) => {
    const commentContainer = document.querySelector(".commentContainer");
    const commentItem = document.createElement("li");
    commentItem.classList.add(
      "list-group-item",
      "d-flex",
      "flex-column",
      "gap-2"
    );
    commentContainer.appendChild(commentItem);
    commentItem.innerHTML = `<div class="d-flex align-items-center gap-3">
      <img src="" class="img-fluid card-author-img userAvatar" alt="">
      <h5 class="m-0 userName">d</h5>
    </div>
    <div>
      <p class="m-0 commentBody"></p>
    </div>
    <div class="border-top my-2 p-1"></div>`;

    commentItem.querySelector(".userAvatar").src = comment.author.avatar;
    commentItem.querySelector(".userName").innerText = comment.author.name;
    commentItem.querySelector(".commentBody").innerText = comment.body;
  });
}
