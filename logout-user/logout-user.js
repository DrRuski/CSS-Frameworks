export function logoutUser(logoutBtn) {
  logoutBtn.addEventListener("click", (e) => {
    localStorage.clear();
  });
}
