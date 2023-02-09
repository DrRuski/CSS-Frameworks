import { submitBtn, errorMessageContainer } from "./registrationForm.mjs";

import {
  api_Base_Url,
  api_User_Registration_EndPoint,
} from "../api/api_Url_Endpoints.mjs";

async function registerUser(email, username, password) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, username, password }),
    };

    const response = await fetch(
      `${api_Base_Url}${api_User_Registration_EndPoint}`,
      postData
    );

    const json = await response.json();
    const jsonErrorArray = json.errors;

    const errorMessage = jsonErrorArray.map((e) => {
      return `${e.message}`;
    });

    console.log(errorMessage);

    if (!response.ok) {
    } else {
      // setTimeout(() => {
      //   window.location.pathname = "index.html";
      // }, 2000);
    }

    return json;
  } catch (error) {
    console.log(error);
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const userEmail = document.getElementById("userEmail").value;
  const userName = document.getElementById("userName").value;
  const userPassword = document.getElementById("userPassword").value;

  registerUser(userEmail, userName, userPassword);
});
