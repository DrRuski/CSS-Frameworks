import { submitBtn, buttonAcceptedStyle } from "./registrationForm.mjs";

import {
  api_Base_Url,
  api_User_Registration_EndPoint,
} from "../api/api_Url_Endpoints.mjs";

async function registerUser(email, name, password) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, password }),
    };

    const response = await fetch(
      `${api_Base_Url}${api_User_Registration_EndPoint}`,
      postData
    );

    const json = await response.json();

    if (!response.ok) {
    } else {
      buttonAcceptedStyle();
      setTimeout(() => {
        window.location.pathname = "index.html";
      }, 2000);
    }

    return json;
  } catch (error) {
    console.log(error);
  }
}

submitBtn.addEventListener("click", (e) => {
  const form = document.getElementById("form");
  const formData = new FormData(form);

  const userEmail = formData.get("useremail");
  const username = formData.get("username");
  const userPassword = formData.get("password");

  registerUser(userEmail, username, userPassword);
});
