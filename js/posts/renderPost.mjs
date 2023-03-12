import { deleteUserPost } from "./postManagement/deletePost/deleteConnection.mjs";
import { updateUserPost } from "./postManagement/updatePost/updateConnection.mjs";
import { checkReactions } from "../react/checkReactions.mjs";
import { api_Base_Url, api_All_Posts_EndPoint } from "../api/api_Url_Endpoints.mjs";

export function renderPost(postData) {
  //
  const postContainer = document.querySelector(".write-post");
  const container = document.createElement("div");
  container.setAttribute("id", postData.id);
  container.classList.add("col-12", "col-md-6", "col-lg-4");
  container.dataset.id = postData.id;
  postContainer.appendChild(container);
  container.innerHTML = `  <div class="card h-100">
  <div class="card-header d-flex align-items-center justify-content-between">

  <div class="d-flex gap-2 align-items-center">
    <img class="img-fluid card-author-img" src="assets/images/postUserIcon.png" alt="" />
    <h6 class="m-0 card-author"></h6>
  </div>
  
<button class="btn text-primary follow-user" type="button" id=""></button>

  <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown"><i class="fa-solid fa-ellipsis-vertical"></i></button>

      <ul class="dropdown-menu">
        <li><button class="dropdown-item mb-1 py-2" data-bs-toggle="modal" data-bs-target="#updatePostModal">Update Post</button></li>
        <li><button class="dropdown-item text-warning mt-1 py-2 d-flex justify-content-between align-items-center"><span>Report Post</span><i class="fa-solid fa-triangle-exclamation"></i></i></button></li>
        <li><button id="deletePostBtn" class="dropdown-item bg-danger text-white mt-1 py-2 d-flex justify-content-between align-items-center"><span>Delete Post</span><i class="fa-regular fa-trash-can"></i></button></li>
      </ul>



      <div class="modal fade" id="updatePostModal" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5">Update Current Post</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="updatePostForm">
                    <div class="form-floating mb-3">
                      <input name="title" type="text" class="form-control" id="postTitle" placeholder="Post Title" required minlength="3" />
                      <label for="postTitle">Post Title</label>
                    </div>
                    <div class="input-group mb-3">
                      <input name="media" type="url" class="form-control" id="postImg" />
                      <label class="input-group-text" for="postImg">Image URL</label>
                    </div>
                    <div class="form-floating mb-3">
                      <input name="hashTag" type="text" class="form-control" id="postHashtags" placeholder="Add Tags" />
                      <label for="postHashtags">Add Tags</label>
                    </div>
                    <div class="mb-3">
                      <textarea name="postBody" class="form-control" id="postContent" rows="5" placeholder="Write your post caption here..."
                        minlength="5"></textarea>
                    </div>
                    <button class="btn btn-primary btn-sm">Update Post <i class="fa-solid fa-up-right-from-square"></i></button>
                </form>
            </div>
          </div>
        </div>
      </div>
  </div>



  <div class="card-body d-flex flex-column gap-2 p-0">
  <div>
  <img class="img-fluid card-img " src="" alt=""/>
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
  <div class="py-3">
  </div>
  <div class="d-flex justify-content-center mb-3 gap-3"><div class="title-reactions"></div><div class="show-reactions"></div></div>
  <div class="d-flex justify-content-center mb-3 gap-3">
  <div class="dropup">
  <button class="btn dropdown-toggle btn-outline-primary" type="button" data-bs-toggle="dropdown" dropup>
    React &#128512;</i>
  </button>
  <ul class="dropdown-menu set-dataset-id">
    <li><button class="dropdown-item text-center react">&#128540;</button></li>
    <li><button class="dropdown-item text-center react">&#128169;</button></li>
    <li><button class="dropdown-item text-center react">&#128512;</button></li>
    <li><button class="dropdown-item text-center react">&#128525;</button></li>
    <li><button class="dropdown-item text-center react">&#128529;</button></li>
  </ul>
</div>
  <a href="specificpost.html?id=${postData.id}" class="btn btn-primary">View Post</a>
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
  container.querySelector(".follow-user").id = postData.author.name;
  container.querySelector(".set-dataset-id").dataset.id = postData.id;
  container.querySelector(".card-author-img").src = postData.author.avatar;
  container.querySelector(".card-author").innerText = postData.author.name;
  container.querySelector(".card-img").src = postData.media;
  container.querySelector(".card-title").innerText = postData.title;
  container.querySelector(".card-text").innerText = postData.body;
  const reactContainer = container.querySelector(".show-reactions");
  if (postData.reactions.length > 0) {
    checkReactions(postData, reactContainer, container);
  }
  deleteUserPost(container, postData);
  updateUserPost(container, postData);
}
