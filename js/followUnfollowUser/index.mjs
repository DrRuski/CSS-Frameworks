import { api_Base_Url, api_Profile } from "../api/api_Url_Endpoints.mjs";
import { currentProfile } from "../profile/getCurrentProfile.mjs";

export const url = `${api_Base_Url}${api_Profile}`;
const profile = JSON.parse(localStorage.getItem("userProfile"));
export const loggedInUser = profile.name;
export const checkFollow = `${url}${loggedInUser}?_following=true`;
export const checkFollowers = `${url}${loggedInUser}?_followers=true`;
