export async function displayProfile(url) {
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
    const displayProfile = await response.json();
    editProfile(displayProfile);
  } catch (error) {
    console.log(error);
  }
}
function editProfile(displayProfile) {
  const profileAvatar = document.querySelector(".profile-avatar");
  const profileBanner = document.querySelector(".profile-banner");
  const profileName = document.querySelector(".user-name");
  profileAvatar.src = displayProfile.avatar;
  profileAvatar.alt = `avatar picture for user: ${displayProfile.name}`;
  profileBanner.src = displayProfile.banner;
  profileBanner.alt = `banner picture for user: ${displayProfile.name}`;
  profileName.innerHTML = displayProfile.name;
}
