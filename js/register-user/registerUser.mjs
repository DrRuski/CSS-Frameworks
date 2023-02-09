import { submitBtn, userInputData } from "./registrationForm.mjs";

import {
  api_Base_Url,
  api_User_Registration_EndPoint,
} from "../api/api_Url_Endpoints.mjs";

async function registerUser(userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(
      `${api_Base_Url}${api_User_Registration_EndPoint}`,
      postData
    );
    console.log(response);
    const json = await response.json();
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  registerUser(userInputData);
  console.log(userInputData);
});
