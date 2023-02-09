import { userInput, submitBtn } from "./loginForm.mjs";

import {
  api_Base_Url,
  api_User_Login_EndPoint,
} from "../api/api_Url_Endpoints.mjs";

async function userLogin(userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    const response = await fetch(
      `${api_Base_Url}${api_User_Login_EndPoint}`,
      postData
    );
    console.log(response);
    const json = await response.json();
    const accessToken = json.accessToken;
    localStorage.setItem("accessToken", accessToken);
    console.log(json);
    return json;
  } catch (error) {
    console.log(error);
  }
}

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userLogin(userInput);
});
