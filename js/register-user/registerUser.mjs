import { userRegistrationInfo } from "./registrationForm.mjs";

const baseURL = `https://api.noroff.dev`;

async function registerUser() {
  try {
    const response = await fetch(`${baseURL}/api/v1/social/auth/register`);
    const json = await response.json();
    console.log(json);

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

// registerUser();
