export function getUsers() {
  const btn = document.querySelectorAll(".follow-user");
  const btnVariable = Array.from(btn).map((element) => element.id);
  return btnVariable;
}
