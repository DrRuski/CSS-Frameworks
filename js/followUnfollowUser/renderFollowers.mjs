import { profileFollowers } from "../profile/index.mjs";
export function renderFollowers(followers) {
  const container = document.createElement("li");
  container.classList.add("list-group-item");
  profileFollowers.appendChild(container);
  container.innerHTML = `
  <div class="p-1">
    <img class="img-fluid followers-img" width="75" src="" alt="" />
  </div>
  <div class="followers-name"></div>
  `;
  container.querySelector(".followers-img").src = followers.avatar;
  container.querySelector(".followers-img").alt = "avatar img of " + followers.name;
  container.querySelector(".followers-name").innerText = followers.name;
}
