import { checkFollowing } from "./checkFollowing.mjs";
import { checkFollow } from "./index.mjs";

export function isFollowing(follower) {
  function getData() {
    const followers = viewFollowers(follower);
    console.log(followers);
    const users = buttons();
    if (followers === users) {
      console.log("test");
    }
  }
  getData();
}

function viewFollowers(follower) {
  const viewFollowersVariable = follower.followers.forEach((element) => {
    const followers = element.name;
    // console.log(followers);
    return followers;
  });
  console.log(viewFollowersVariable);
  return viewFollowersVariable;
}

function buttons() {
  const btn = document.querySelectorAll(".follow-user");
  const btnVariable = btn.forEach((e) => {
    const users = e.id;
    // console.log(users);
    return users;
  });
  return btnVariable;
}

// function checkIfFollowing() {
//   if (followers === users) {
//     console.log(followers);
//     console.log("Done");
//   }
// }

//   function checkIfFollowing(followers, users) {
//     console.log("Test");
//   }
//     checkIfFollowing(followers, users);
// export async function isFollowing(follower) {
//   const btn = document.querySelectorAll(".follow-user");
//   follower.followers.forEach((element) => {
//     const followers = element.name;
//     console.log(followers);
//   });
//   btn.forEach((e) => {
//     console.log(e.id);
//   });
// }
