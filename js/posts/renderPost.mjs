export function renderPost(postData) {
  const postContainer = document.querySelector(".write-post");
  const container = document.createElement("div");
  container.setAttribute("id", postData.id);
  container.classList.add("col-12", "col-md-6", "col-lg-3");

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




