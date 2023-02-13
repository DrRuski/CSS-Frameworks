export async function createPost(postData) {
  const postContainer = document.querySelector(".write-post");
  const container = document.createElement("div");
  postContainer.appendChild(container);
  container.classList.add("col-12", "col-md-6", "col-lg-3");
  // container.classList.add("div");
  // container.createElement("div");
  container.innerHTML = `
  <div class="card h-100">
    <div class="card-header d-flex align-items-center justify-content-between">
    <div class="d-flex gap-2 align-items-center">
      <img class="img-fluid card-author-img" width="40px" src="assets/images/postUserIcon.png" alt="" />
      <h6 class="m-0 card-author"></h6>
    </div>
    <button class="btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
    </div>
    <div class="card-body d-flex flex-column gap-2 p-0">
    <div>
    <img class="img-fluid card-img " src="" alt="" />
    </div>
    <div class="px-3">
      <a href="#" class="card-link text-decoration-none"></a>
      <a href="#" class="card-link text-decoration-none"></a>
    </div>
    <h3 class="ms-3 card-title">
    </h3>
    <div class="px-3">
    <p class="card-text">
    </p>
    </div>
    <div class="py-3">
    <ul class="d-flex p-0 m-0 justify-content-center gap-4">
      <li class="list-group-item">
        <button class="btn"><i class="fa-regular fa-heart"></i></button>
      </li>
      <li class="list-group-item">
        <button class="btn"><i class="fa-regular fa-comments"></i></button>
      </li>
    </ul>
    </div>
    </div>
  </div>
  `;
  container.querySelector(".card-author-img").src = "";
  container.querySelector(".card-author").innerText = "Author";
  container.querySelector(".card-img").src = postData.media;
  container.querySelector(".card-title").innerText = postData.title;
  container.querySelector(".card-text").innerText = postData.body;
  console.log("Testing function");
}
