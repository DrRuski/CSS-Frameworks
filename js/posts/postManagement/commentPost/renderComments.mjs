export function renderComments(postData) {
  const test = document.querySelector(".commentTester");
  const commentContainer = document.createElement("li");
  commentContainer.setAttribute(
    "id",
    postData.map((e) => e.id)
  );
  commentContainer.classList.add(
    "list-group-item",
    "d-flex",
    "flex-column",
    "gap-2"
  );
  test.appendChild(commentContainer);
  postData.map((e) => {
    const commentUsername = e.author.name;
    const commentUserAvatar = e.author.avatar;
    const commentBody = e.body;

    commentContainer.innerHTML += `  
                                <div class="d-flex align-items-center gap-3">
                                    <img src="${commentUserAvatar}" class="img-fluid card-author-img" alt="">
                                    <h5 class="m-0">${commentUsername}</h5>
                                </div>
                                <div>
                                    <p class="m-0">${commentBody}</p>
                                </div>
                            <div class="border-top my-2 p-1"></div>`;
  });
}
