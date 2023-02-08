import {
  api_Base_Url,
  api_User_Login_EndPoint,
} from "../api/api_Url_Endpoints.mjs";

import { userInput, submitBtn } from "./loginForm.mjs";

async function userLogin() {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: userInput,
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

submitBtn.addEventListener("click", userLogin());
