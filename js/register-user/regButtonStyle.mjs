import { submitBtn } from "./registrationForm.mjs";

export function buttonAcceptedStyle() {
  submitBtn.style.border = "none";
  submitBtn.style.backgroundColor = `rgb(40, 167, 69)`;
  submitBtn.innerText = `Account Registered ✔`;
}
