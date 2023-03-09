import { profileFormInput } from "./profileFormInput.mjs";
export async function updateProfile(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const getData = {
      method: "PUT",
      body: profileFormInput(),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, getData);
    const updatedProfile = await response.json();
  } catch (error) {
    console.log(error);
  }
}
