import { api_Base_Url, api_Profile } from "../api/api_Url_Endpoints.mjs";
import { currentProfile } from "../profile/getCurrentProfile.mjs";
const urlFollow = `${api_Base_Url}${api_Profile}Gaute/follow`;
const urlUnFollow = `${api_Base_Url}${api_Profile}IlyaTest/unfollow`;
async function followProfile(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const getData = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, getData);
    const postData = await response.json();
    console.log(postData);
  } catch (error) {
    console.log(error);
  }
}
followProfile(urlFollow);
