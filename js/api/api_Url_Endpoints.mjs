/* Base Api Url */
export const api_Base_Url = "https://api.noroff.dev";

/* POST */
export const api_User_Registration_EndPoint = "/api/v1/social/auth/register";
export const api_User_Login_EndPoint = "/api/v1/social/auth/login";
export const api_Create_New_Post_EndPoint = "/api/v1/social/posts";
export const api_Comment_On_Post_Endpoint = "/api/v1/social/posts/";
// Example with id "/api/v1/social/posts/<id>/comment"

/* GET */
export const api_All_Posts_EndPoint = "/api/v1/social/posts";
export const api_Single_Post_EndPoint = "/api/v1/social/posts";
// Example with id "/api/v1/social/posts/<id>"

export const api_All_Followed_Users_Posts_EndPoint =
  "/api/v1/social/posts/following";

/* PUT */
export const api_Update_Post_EndPoint = "/api/v1/social/posts/";
// Example with id "/api/v1/social/posts/<id>"
export const api_React_To_Post_EndPoint = "/api/v1/social/posts/react/<symbol>";
// Example with id "/api/v1/social/posts/<id>/react/<symbol>";

/* DELETE */
export const api_Delete_Post_EndPoint = "/api/v1/social/posts/";
// Example with id "/api/v1/social/posts/<id>";

// PROFILE
export const api_Profile = `/api/v1/social/profiles/`;
// Example https://api.noroff.dev/api/v1/social/profiles/<name>
