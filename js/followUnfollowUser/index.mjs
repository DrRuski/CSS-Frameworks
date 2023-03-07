import { api_Base_Url, api_Profile } from "../api/api_Url_Endpoints.mjs";
import { currentProfile } from "../profile/getCurrentProfile.mjs";
import { isFollowing } from "./isFollowing.mjs";

const url = `${api_Base_Url}${api_Profile}`;
const urlFollow = `${api_Base_Url}${api_Profile}Gaute/follow`;
const urlUnFollow = `${api_Base_Url}${api_Profile}IlyaTest/unfollow`;
export const checkFollow = `${url}dady?_following=true&_followers=true`;

// Follow User
// const adada = "https://api.noroff.dev/api/v1/social/profiles/Helena/unfollow";
// async function followProfile(url) {
//   try {
//     const accessToken = localStorage.getItem("accessToken");
//     const getData = {
//       method: "PUT",
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//       },
//     };
//     const response = await fetch(url, getData);
//     const postData = await response.json();
//     console.log(postData);
//   } catch (error) {
//     console.log(error);
//   }
// }
// followProfile(adada);
