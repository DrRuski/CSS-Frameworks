import { updateProfile } from "./updateProfile.mjs";
export function setupUpdateProfile(url) {
  document.querySelector("form#updateProfileForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    await updateProfile(url);
    location.reload();
  });
}
