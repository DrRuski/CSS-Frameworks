import { submitBtn } from "./loginForm.mjs";

export function buttonAcceptedStyle() {
  submitBtn.style.border = "none";
  submitBtn.style.backgroundColor = `rgb(40, 167, 69)`;
  submitBtn.innerText = `Redirecting...`;
}
