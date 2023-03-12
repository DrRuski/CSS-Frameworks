export function profileFormInput() {
  const newProfileData = document.querySelector("#updateProfileForm");
  const newFormData = new FormData(newProfileData);
  const banner = newFormData.get("banner");

  const avatar = newFormData.get("avatar");

  return JSON.stringify({
    ...(Boolean(avatar) && { avatar }),
    ...(Boolean(banner) && { banner }),
  });
}
