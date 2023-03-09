import { currentProfile } from "./getCurrentProfile.mjs";
import { api_Base_Url, api_Profile } from "../api/api_Url_Endpoints.mjs";
import { displayProfile } from "./displayProfile.mjs";
import { setupPosts } from "./setupPosts.mjs";
import { profileFormInput } from "./profileFormInput.mjs";
import { setupUpdateProfile } from "./setupUpdateProfile.mjs";

export const url = `${api_Base_Url}${api_Profile}${currentProfile.name}/media`;
const urlDisplayProfile = `${api_Base_Url}${api_Profile}${currentProfile.name}`;
const urlUserPosts = `${api_Base_Url}${api_Profile}${currentProfile.name}/posts?_author=true`;

setupPosts(urlUserPosts);
displayProfile(urlDisplayProfile);
setupUpdateProfile(url);

// const profileImg = document.querySelector("#profileImgUrl");
// const avatarImg = document.querySelector("#avatarImgUrl");
// const submitButton = document.querySelector("#updateProfileSubmit");
// submitButton.classList.add("disabled");
// function onchange() {
//   profileImg[avatarImg.value ? "removeAttribute" : "setAttribute"]("required", "required");
//   avatarImg[profileImg.value ? "removeAttribute" : "setAttribute"]("required", "required");
//   submitButton.classList.remove("disabled");
// }
// profileImg.addEventListener("change", onchange);
// avatarImg.addEventListener("change", onchange);

// function buttonStateListener() {
//   const form = document.querySelector("#updateProfileForm");

//   form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const data = Object.fromEntries(formData.entries());
//     console.log(JSON.stringify(data));
//   });

//   form.avatar.addEventListener("input", () => {
//     if (form.banner.value) {
//       form.avatar.required = false;
//       form.banner.required = true;
//     } else {
//       form.avatar.required = true;
//       form.banner.required = false;
//     }
//   });

//   form.banner.addEventListener("input", () => {
//     if (form.avatar.value) {
//       form.banner.required = false;
//       form.avatar.required = true;
//     } else {
//       form.banner.required = true;
//       form.avatar.required = false;
//     }
//   });
// }
// buttonStateListener();
