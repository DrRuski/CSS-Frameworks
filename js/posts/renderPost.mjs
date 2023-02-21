export function renderPost(postData) {
  const postContainer = document.querySelector(".write-post");
  const container = document.createElement("div");
  container.setAttribute("id", postData.id);
  container.classList.add("col-12", "col-md-6", "col-lg-3");
  container.dataset.id = postData.id;
  postContainer.appendChild(container);
  container.innerHTML = `  <div class="card h-100">
  <div class="card-header d-flex align-items-center justify-content-between">
  <div class="d-flex gap-2 align-items-center">
    <img class="img-fluid card-author-img" src="assets/images/postUserIcon.png" alt="" />
    <h6 class="m-0 card-author"></h6>
  </div>
  <button class="btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
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
  <div class="d-flex justify-content-center mb-3">
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
  container.querySelector(".card-author-img").src = postData.author.avatar;
  container.querySelector(".card-author").innerText = postData.author.name;
  container.querySelector(".card-img").src = postData.media;
  container.querySelector(".card-title").innerText = postData.title;
  container.querySelector(".card-text").innerText = postData.body;
}
