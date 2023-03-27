import { submitBtn } from "./registrationForm.mjs";
import { buttonAcceptedStyle } from "./regButtonStyle.mjs";

import {
  api_Base_Url,
  api_User_Registration_EndPoint,
} from "../api/api_Url_Endpoints.mjs";
//
/**
 * Registers a new user with the provided email, name, and password.
 * @param {string} email - The user's email address.
 * @param {string} name - The user's name.
 * @param {string} password - The user's password.
 * @returns {Promise} A Promise that resolves with the response data if the registration was successful, or rejects with an error otherwise.
 */
//
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
      }, 1000);
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
  const name = formData.get("username");
  const password = formData.get("password");

  registerUser(email, name, password);
});
