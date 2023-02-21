import { submitBtn } from "./loginForm.mjs";
import { buttonAcceptedStyle } from "./loginButtonStyle.mjs";

import {
  api_Base_Url,
  api_User_Login_EndPoint,
} from "../api/api_Url_Endpoints.mjs";

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
    } else {
      buttonAcceptedStyle();
      setTimeout(() => {
        window.location.pathname = "home.html";
      }, 2000);
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
