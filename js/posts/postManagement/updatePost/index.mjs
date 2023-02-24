



export async function updatePost(url) {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await fetch(url, deletePostSetup(accessToken));
      console.log(response);
      return await response.json();
    } catch (error) {
      console.log(error);
    }
  }
  