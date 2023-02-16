import {
  api_Base_Url,
  api_All_Posts_EndPoint,
} from "../../../api/api_Url_Endpoints.mjs";

import { getPostTitle } from "./getPostTitle.mjs";

getPostTitle(`${api_Base_Url}${api_All_Posts_EndPoint}`);
