import { currentProfile } from "./getCurrentProfile.mjs";
import { api_Base_Url, api_Profile } from "../api/api_Url_Endpoints.mjs";
import { editProfile } from "./editProfile.mjs";
import { displayProfile } from "./displayProfile.mjs";
// console.log(currentProfile);
const url = `${api_Base_Url}${api_Profile}${currentProfile.name}/media`;
const urlDisplayProfile = `${api_Base_Url}${api_Profile}${currentProfile.name}`;
// console.log(url);
editProfile(url);
displayProfile(urlDisplayProfile);
// async function getProfile(url) {
//   try {
//     const accessToken = localStorage.getItem("accessToken");
//     const getData = {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${accessToken}`,
//       },
//     };
//     const response = await fetch(url, getData);
//     const test = await response.json();
//     console.log(test);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getProfile(url);
