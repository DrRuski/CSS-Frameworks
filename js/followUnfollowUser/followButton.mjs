import { followUnfollowUser } from "./followUnfollowUser.mjs";
import { url } from "./index.mjs";
import { checkFollowing } from "./checkFollowing.mjs";
import { checkFollow } from "./index.mjs";

export async function followButton() {
  const btn = document.querySelectorAll(".follow-user");
  btn.forEach(function (i) {
    i.addEventListener("click", function () {
      if (i.innerHTML == "follow") {
        followUnfollowUser(`${url}${i.id}/follow`);
      } else {
        followUnfollowUser(`${url}${i.id}/unfollow`);
      }
    });
  });
}
