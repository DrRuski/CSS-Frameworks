import { api_Base_Url, api_Profile } from "../api/api_Url_Endpoints.mjs";
import { currentProfile } from "../profile/getCurrentProfile.mjs";
import { isFollowing } from "./isFollowing.mjs";

const url = `${api_Base_Url}${api_Profile}`;
const urlFollow = `${api_Base_Url}${api_Profile}Gaute/follow`;
const urlUnFollow = `${api_Base_Url}${api_Profile}IlyaTest/unfollow`;
export const checkFollow = `${url}dady?_following=true&_followers=true`;
// console.log(url);
