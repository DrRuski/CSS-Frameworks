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
    console.log(displayProfile);
    editProfile(displayProfile);
  } catch (error) {
    console.log(error);
  }
}
function editProfile(displayProfile) {
  const profileImage = document.querySelector("#profile-image");
  const profileName = document.querySelector(".userName");
  profileImage.src = displayProfile.avatar;
  profileName.innerHTML = displayProfile.name;
}
