import { checkFollowing } from "./checkFollowing.mjs";
import { checkFollow } from "./index.mjs";
import { getUsers } from "./getUsers.mjs";
import { viewFollowers } from "./viewFollowers.mjs";
import { updateFollowButton } from "./updateFollowButton.mjs";

export function isFollowing(follower) {
  function getData() {
    const followers = viewFollowers(follower);
    const users = getUsers();
    let currentFollowing = followers;
    let allUsers = users;
    currentFollowing = currentFollowing.filter(function (item) {
      return allUsers.includes(item);
    });
    updateFollowButton(currentFollowing);
  }
  getData();
}
