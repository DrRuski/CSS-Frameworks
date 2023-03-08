import { isUserFollowed } from "./isUserFollowed.mjs";
import { loggedInUser } from "./index.mjs";

export function updateFollowButton(currentFollowing) {
  const btn = document.querySelectorAll(".follow-user");
  const btnVariable = btn.forEach((e) => {
    const users = e.id;
    if (isUserFollowed(users, currentFollowing)) {
      e.innerHTML = "unfollow";
    } else {
      e.innerHTML = "follow";
    }
    if (loggedInUser == users) {
      e.style.display = "none";
    }
  });
}
