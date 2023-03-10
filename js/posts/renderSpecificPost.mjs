import { userPostComment } from "./postManagement/commentPost/commentConnection.mjs";
import { renderComments } from "./postManagement/commentPost/renderComments.mjs";
const breadCrumbTitle = document.querySelector(".postTitle");

export function renderSpecificPost(postData) {
  const postContainer = document.querySelector(".write-post");
  const container = document.createElement("div");
  container.setAttribute("id", postData.id);
  container.classList.add("col-10", "m-auto");
  postContainer.appendChild(container);
  container.innerHTML = `  <div class="card h-100">
    <div class="card-header d-flex align-items-center justify-content-between">
      <div class="d-flex gap-2 align-items-center">
        <img class="img-fluid card-author-img" src="assets/images/postUserIcon.png" alt="" />
        <h6 class="m-0 card-author"></h6>
      </div>
    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"><i class="fa-solid fa-ellipsis-vertical"></i></button>
    <ul class="dropdown-menu">
        <li><button class="dropdown-item mb-1 py-2" data-bs-toggle="modal" data-bs-target="#updatePostModal">Update Post</button></li>
        <li><button class="dropdown-item text-warning mt-1 py-2 d-flex justify-content-between align-items-center"><span>Report Post</span><i class="fa-solid fa-triangle-exclamation"></i></i></button></li>
        <li><button id="deletePostBtn" class="dropdown-item bg-danger text-white mt-1 py-2 d-flex justify-content-between align-items-center"><span>Delete Post</span><i class="fa-regular fa-trash-can"></i></button></li>
      </ul>
    </div>
    <div class="card-body d-flex flex-column gap-2 p-0">
    <div>
    <img class="img-fluid card-img " src="" alt="" />
    </div>
    <div class="px-3">
      <a href="#" class="card-link text-decoration-none tags"></a>
    </div>
    <h3 class="ms-3 card-title">
    </h3>
    <div class="px-3">
    <p class="card-text">
    </p>
    </div>


  <div class="border-top my-2 p-1"></div>


  <div class="row p-1 mx-4 d-flex flex-column gap-2">
  <div><h2 class="text-center">Comment Section</h2></div>
    <ul class="commentTester d-flex flex-column gap-3">
    </ul>
  </div>

    <div class="row p-1 mx-4">
          <form id="postCommentForm">
            <div class="mb-3">
            <textarea name="postBody" class="form-control" id="postContent" rows="5" placeholder="Write your comment here..."
                minlength="2"></textarea>
            </div>
            <button class="btn btn-primary btn-sm mb-3">Publish Comment <i class="fa-solid fa-up-right-from-square"></i></button>
          </form>
        </div>
    </div>`;

  postData.tags = postData.tags.filter((tag) => {
    switch (tag) {
      case "":
        return false;
      default:
        postData.tags.forEach((element) => {
          container.querySelector(".tags").innerText = `#${element}`;
        });
    }
  });
  breadCrumbTitle.innerHTML = `${postData.title}`;
  container.querySelector(".card-author-img").src = postData.author.avatar;
  container.querySelector(".card-author").innerText = postData.author.name;
  container.querySelector(".card-img").src = postData.media;
  container.querySelector(".card-title").innerText = postData.title;
  container.querySelector(".card-text").innerText = postData.body;
  //
  renderComments(postData.comments);
  userPostComment(container);
}
