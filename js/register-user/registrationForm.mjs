const userEmail = document.getElementById("userEmail").value;
const userName = document.getElementById("userName").value;
const userPassword = document.getElementById("userPassword").value;
export const submitBtn = document.getElementById("submitBtn");

export const userInputData = {
  name: `${userName}`,
  email: `${userEmail}`,
  password: `${userPassword}`,
};

console.log(userPassword);
