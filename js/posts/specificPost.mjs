import { getParam } from "./getParam.mjs";
import { logoutUser } from "../../logout-user/logout-user.js";
const logoutBtn = document.querySelector(".logoutBtn");
logoutUser(logoutBtn);
getParam();
