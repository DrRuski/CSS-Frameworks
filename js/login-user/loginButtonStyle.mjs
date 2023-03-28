import { submitBtn } from "./loginForm.mjs";
export function buttonAcceptedStyle() {
  submitBtn.style.border = "none";
  submitBtn.style.backgroundColor = `rgb(40, 167, 69)`;
  submitBtn.innerText = `Redirecting...`;
}

export function buttonErrorStyle() {
  submitBtn.style.border = "none";
  submitBtn.style.backgroundColor = `rgb(233, 100, 121)`;
  submitBtn.innerText = `Something went wrong, check your input`;
}
