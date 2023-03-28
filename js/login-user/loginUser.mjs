import { submitBtn } from "./loginForm.mjs";
import { buttonAcceptedStyle, buttonErrorStyle } from "./loginButtonStyle.mjs";

import {
  api_Base_Url,
  api_User_Login_EndPoint,
} from "../api/api_Url_Endpoints.mjs";
//
/**
 * Logs in a user with the given email and password.
 * @param {string} email - The email of the user.
 * @param {string} password - The password of the user.
 * @returns {Object} The JSON response from the server.
 */
//
async function loginUser(email, password) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    };

    const response = await fetch(
      `${api_Base_Url}${api_User_Login_EndPoint}`,
      postData
    );

    const json = await response.json();

    const accessToken = json.accessToken;
    const userProfile = {
      name: json.name,
      email: json.email,
      avatar: json.avatar,
      banner: json.banner,
    };

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("userProfile", JSON.stringify(userProfile));

    if (!response.ok) {
      console.log(json.errors);
      buttonErrorStyle();
    } else {
      buttonAcceptedStyle();
      setTimeout(() => {
        window.location.pathname = "home.html";
      }, 500);
    }

    return json;
  } catch (error) {
    console.log(error);
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const form = document.getElementById("form");
  const formData = new FormData(form);
  const email = formData.get("useremail");
  const password = formData.get("password");

  loginUser(email, password);
});
