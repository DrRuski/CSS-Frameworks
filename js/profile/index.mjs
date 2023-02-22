import { currentProfile } from "./getCurrentProfile.mjs";
import { api_Base_Url, api_Profile } from "../api/api_Url_Endpoints.mjs";
// console.log(currentProfile);
const url = api_Base_Url + api_Profile + currentProfile.name + "/media";
// console.log(url);
async function getProfile(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, getData);
    const test = await response.json();
    console.log(test);
  } catch (error) {
    console.log(error);
  }
}
// getProfile(url);

async function editProfile(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const getData = {
      method: "PUT",
      body: JSON.stringify({
        avatar: "https://cdn.pixabay.com/photo/2020/04/18/18/44/youtuber-5060540_960_720.jpg",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, getData);
    const test = await response.json();
    console.log(test);
  } catch (error) {
    console.log(error);
  }
}
editProfile(url);
async function editAvatar(url) {
  const accessToken = localStorage.getItem("accessToken");
  fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      avatar: "https://cdn.pixabay.com/photo/2020/04/18/18/44/youtuber-5060540_960_720.jpg",
    }),
  });
}
// editAvatar(url);
