import {
  api_Base_Url,
  api_Single_Post_EndPoint,
} from "../api/api_Url_Endpoints.mjs";
import { setupPage } from "./setupPage.mjs";
export function getParam(specificUrl) {
  const param = new URLSearchParams(window.location.search);
  const id = param.get("id");
  const newUrl = `${api_Base_Url}${api_Single_Post_EndPoint}/${id}?_author=true&_comments=true&_reactions=true`;
  setupPage(newUrl);
}
