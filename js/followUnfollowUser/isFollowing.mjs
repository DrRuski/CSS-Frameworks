import { checkFollowing } from "./checkFollowing.mjs";
import { checkFollow } from "./index.mjs";

export function isFollowing(follower) {
  function getData() {
    const followers = viewFollowers(follower);
    const users = buttons();
    // console.log(followers);
    // console.log(users);
    const test = ["IlyaaTest", "antonio", "torstein123", "12312321123", "dady", "Fiona_Macka"];
    // console.log(test);
    // let result = test.filter((e1) => !users.some((e2) => e1 === e2));
    // console.log("Filter Results: " + result);
    // const allFollowers = test.filter((item) => !users.includes(item));
    // console.log(allFollowers);
    console.log(followers);
    let arr1 = followers;
    let arr2 = users;
    arr1 = arr1.filter(function (item) {
      return arr2.includes(item);
    });
    console.log(arr1);
  }
  getData();
}

function viewFollowers(follower) {
  const viewFollowersVariable = follower.followers.map((element) => element.name);
  return viewFollowersVariable;
}

function buttons() {
  const btn = document.querySelectorAll(".follow-user");
  const btnVariable = Array.from(btn).map((element) => element.id);
  return btnVariable;
}

// function viewFollowers(follower) {
//   const viewFollowersVariable = follower.followers.forEach((element) => {
//     const followers = element.name;
//     // console.log(followers);
//     return followers;
//   });
//   console.log(viewFollowersVariable);
//   return viewFollowersVariable;
// }
// function buttons() {
//   const btn = document.querySelectorAll(".follow-user");
//   const btnVariable = btn.forEach((e) => {
//     const users = e.id;
//     // console.log(users);
//     return users;
//   });
//   return btnVariable;
// }

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
