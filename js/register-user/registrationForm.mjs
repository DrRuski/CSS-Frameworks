const userEmail = document.querySelector("#userEmail");
const userName = document.querySelector("#userName");
const userPassword = document.querySelector("#userPassword");
export const submitBtn = document.getElementById("submitBtn");

export const userInput = JSON.stringify({
  name: `${userName.value}`,
  email: `${userEmail.value}`,
  password: `${userPassword.value}`,
});


