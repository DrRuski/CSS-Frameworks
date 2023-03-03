import { currentProfile } from "./getCurrentProfile.mjs";
import { api_Base_Url, api_Profile } from "../api/api_Url_Endpoints.mjs";
import { editProfile } from "./editProfile.mjs";
import { displayProfile } from "./displayProfile.mjs";
import { setupPosts } from "./setupPosts.mjs";

const url = `${api_Base_Url}${api_Profile}${currentProfile.name}/media`;
const urlDisplayProfile = `${api_Base_Url}${api_Profile}${currentProfile.name}`;
const urlUserPosts = `${api_Base_Url}${api_Profile}${currentProfile.name}/posts?_author=true`;

setupPosts(urlUserPosts);
editProfile(url);
displayProfile(urlDisplayProfile);
