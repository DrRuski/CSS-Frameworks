import { currentProfile } from "./getCurrentProfile.mjs";
import { api_Base_Url, api_Profile } from "../api/api_Url_Endpoints.mjs";
import { displayProfile } from "./displayProfile.mjs";
import { setupPosts } from "./setupPosts.mjs";
import { profileFormInput } from "./profileFormInput.mjs";
import { setupUpdateProfile } from "./setupUpdateProfile.mjs";
import { checkAllFollowers } from "../followUnfollowUser/checkAllFollowers.mjs";
import { checkFollowers } from "../followUnfollowUser/index.mjs";

export const url = `${api_Base_Url}${api_Profile}${currentProfile.name}/media`;
const urlDisplayProfile = `${api_Base_Url}${api_Profile}${currentProfile.name}`;
const urlUserPosts = `${api_Base_Url}${api_Profile}${currentProfile.name}/posts?_author=true`;
export const profileFollowers = document.querySelector("#profileFollowers");
/**
 * @param {function setupPosts} - Gets all posts the users has created,
 * then renders them using renderPost.mjs
 * @param {function displayProfile} - Gets all information abouts the user,
 * then renders it on profile.html
 * @param {setupUpdateProfile} - Updates profile from "edit profile button",
 * then updates the page using the new information
 * @param {checkAllFollowers} - Checks all followers the logged inn user has,
 * then displays them on the page
 */
setupPosts(urlUserPosts);
displayProfile(urlDisplayProfile);
setupUpdateProfile(url);
checkAllFollowers(checkFollowers);
