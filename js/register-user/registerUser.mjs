import { submitBtn } from "./registrationForm.mjs";
import { buttonAcceptedStyle } from "./regButtonStyle.mjs";

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
      console.log(json.errors);
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
  const email = formData.get("useremail");
  const name = formData.get("username");
  const password = formData.get("password");

  registerUser(email, name, password);
});
