export async function createPost(postData) {
  const postContainer = document.querySelector(".write-post");
  const container = document.createElement("div");
  postContainer.appendChild(container);
  container.classList.add("col-12", "col-md-6", "col-lg-3");

  // Needs to be refactored + add tags (if statement)

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
    </div>
  </div>
  `;
  // if (postData.tags.length > 0 && postData.tags[0] != "" && postData.tags[0] != "string") {
  //   console.log(postData.tags);
  //   container.querySelector(".tags").innerText = "#" + postData.tags;
  // }
  postData.tags = postData.tags.filter((tag) => {
    switch (tag) {
      case "":
        return false;
      default:
        postData.tags.forEach((element) => {
          console.log("Logging test element:", element);
          container.querySelector(".tags").innerText = `#${element}`;
        });
    }
  });
  // Re-write / refactor
  container.querySelector(".card-author-img").src = "";
  container.querySelector(".card-author").innerText = postData.author.name;
  container.querySelector(".card-img").src = postData.media;
  container.querySelector(".card-title").innerText = postData.title;
  container.querySelector(".card-text").innerText = postData.body;
}
