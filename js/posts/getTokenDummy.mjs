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
export const userRegistrationInfo = {
  method: "POST",
  body: {
    name: `${userName.value}`,
    email: `${userEmail.value}`,
    password: `${userPassword.value}`,
  },
};
