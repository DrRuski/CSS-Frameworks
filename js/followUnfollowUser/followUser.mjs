const url = "https://api.noroff.dev/api/v1/social/profiles";
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
followProfile(url);
