const userEmail = document.querySelector("#userEmail");
const userPassword = document.querySelector("#userPassword");
export const submitBtn = document.getElementById("submitBtn");

export const userInput = JSON.stringify({
  email: `${userEmail.value}`,
  password: `${userPassword.value}`,
});
