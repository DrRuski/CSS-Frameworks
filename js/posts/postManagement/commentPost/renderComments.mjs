export function renderComments(postData) {
  console.log(postData);
  const commentContainer = document.querySelector(".commentContainer");
  
  

  commentContainer.innerHTML = `
                                <li class="list-group-item d-flex flex-column gap-2 commentItem">
                                <div class="d-flex align-items-center gap-3">
                                    <img src="" class="img-fluid card-author-img userAvatar" alt="">
                                    <h5 class="m-0 userName"></h5>
                                </div>
                                <div>
                                    <p class="m-0 commentBody"></p>
                                </div>
                              <div class="border-top my-2 p-1"></div>
                              </li>`;
  
  
postData.map((e) => {
  const commentItem = document.querySelector(".commentItem");
  console.log(commentItem);
  commentItem.querySelector(".userAvatar").src = e.author.avatar;
  commentItem.querySelector(".userName").innerText = e.author.name;
  commentItem.querySelector(".commentBody").innerText = e.body;
});
 
}
