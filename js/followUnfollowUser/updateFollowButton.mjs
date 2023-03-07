import { isUserFollowed } from "./isUserFollowed.mjs";
export function updateFollowButton(currentFollowing) {
  const btn = document.querySelectorAll(".follow-user");
  console.log(currentFollowing);
  const profile = JSON.parse(localStorage.getItem("userProfile"));
  const loggedInUser = profile.name;
  const btnVariable = btn.forEach((e) => {
    const users = e.id;

    if (isUserFollowed(users, currentFollowing) == true) {
      e.innerHTML = "unfollow";
    } else {
      e.innerHTML = "follow";
    }
    if (loggedInUser == users) {
      e.innerHTML = "";
    }
  });
}
