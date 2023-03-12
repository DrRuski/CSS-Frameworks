/**
 * Takes url from reactToPost and sends a put request to server
 * @param {string} url
 * Adds a specific reaction to a specific post ID using the url provided
 */
export async function addReactionToPost(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const getData = {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, getData);
    const postData = await response.json();
    location.reload();
  } catch (error) {
    console.log(error);
  }
}
