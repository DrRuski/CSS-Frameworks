const userEmail = document.getElementById("userEmail");
const userFullName = document.getElementById("fullName");
const userName = document.getElementById("userName");
const userPassword = document.getElementById("userPassword");
const submitBtn = document.getElementById("submitBtn");

export const userRegistrationInfo = {
  method: "POST",
  body: {
    name: `${userName.value}`,
    email: `${userEmail.value}`,
    password: `${userPassword.value}`,
  },
};
