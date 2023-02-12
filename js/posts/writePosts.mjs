// export function createPostThumbnail(postData) {
//   const div = document.createElement("div");
//   div.classList.add("post-thumbnail");

//   const title = document.createElement("h2");
//   title.classList.add("post-title");
//   title.innerText = postData.title;

//   const body = document.createElement("p");
//   body.classList.add("post-body");
//   body.innerText = postData.body;

//   const img = document.createElement("img");
//   img.classList.add("post-image");
//   img.src = postData.image;
//   img.alt = postData.title;

//   div.append(title, body, img);
//   return div;
// }

// const posts = await getPosts();
// const thumbs = posts.map(createPostThumbnail);
// document.querySelector(".thumb-container").append(...thumbs);

//   writePostContainer.document.createElement("div");
//   container.classList.add("card", "h100");
// document.querySelector(".write-post").append(...postData);

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
// <div class="card h-100">
//   <div class="card-header d-flex align-items-center justify-content-between">
//     <div class="d-flex gap-2 align-items-center">
//       <img class="img-fluid" width="40px" src="assets/images/postUserIcon.png" alt="" />
//       <h6 class="m-0">Ben Affleck</h6>
//     </div>
//     <button class="btn">
//       <i class="fa-solid fa-ellipsis-vertical"></i>
//     </button>
//   </div>
//   <div class="card-body d-flex flex-column gap-2 p-0">
//     <div>
//       <img class="img-fluid" src="assets/postPictures/postTwo.png" alt="" />
//     </div>
//     <div class="px-3">
//       <a href="#" class="card-link text-decoration-none">
//         #cozy
//       </a>
//       <a href="#" class="card-link text-decoration-none">
//         #relaxing
//       </a>
//     </div>
//     <div class="px-3">
//       <p class="card-text">
//         I am of to escape the hustle and bustle of the daily life and enjoy the serenity of the mountains. Cozy up in my
//         snowy mountain lodge for the ultimate holiday getaway.
//       </p>
//     </div>
//     <div class="py-3">
//       <ul class="d-flex p-0 m-0 justify-content-center gap-4">
//         <li class="list-group-item">
//           <button class="btn">
//             <i class="fa-regular fa-heart"></i>
//           </button>
//         </li>
//         <li class="list-group-item">
//           <button class="btn">
//             <i class="fa-regular fa-comments"></i>
//           </button>
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>;

{
  /* <div class="card h-100">
<div class="card-header d-flex align-items-center justify-content-between">
  <div class="d-flex gap-2 align-items-center">
    <img class="img-fluid" width="40px" src="assets/images/postUserIcon.png" alt="" />
    <h6 class="m-0">Ben Affleck</h6>
  </div>
  <button class="btn"><i class="fa-solid fa-ellipsis-vertical"></i></button>
</div>
<div class="card-body d-flex flex-column gap-2 p-0">
  <div>
    <img class="img-fluid" src="assets/postPictures/postTwo.png" alt="" />
  </div>
  <div class="px-3">
    <a href="#" class="card-link text-decoration-none">#cozy</a>
    <a href="#" class="card-link text-decoration-none">#relaxing</a>
  </div>
  <div class="px-3">
    <p class="card-text">
      I am of to escape the hustle and bustle of the daily life and enjoy the serenity of the mountains.
      Cozy up in my snowy mountain lodge for the ultimate holiday getaway.
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
</div> */
}
