import { checkFollowing } from "./checkFollowing.mjs";
import { checkFollow } from "./index.mjs";
import { getUsers } from "./getUsers.mjs";
import { viewFollowing } from "./viewFollowing.mjs";
import { updateFollowButton } from "./updateFollowButton.mjs";

export function isFollowing(follower) {
  function getData() {
    const following = viewFollowing(follower);
    const users = getUsers();
    let currentFollowing = following;
    let allUsers = users;
    currentFollowing = currentFollowing.filter(function (item) {
      return allUsers.includes(item);
    });
    updateFollowButton(currentFollowing);
  }
  getData();
}
