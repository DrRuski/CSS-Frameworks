export async function editProfile(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const getData = {
      method: "PUT",
      body: JSON.stringify({
        avatar: "https://cdn.pixabay.com/photo/2020/04/18/18/44/youtuber-5060540_960_720.jpg",
        banner:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, getData);
    const updatedProfile = await response.json();
    // console.log(updatedProfile);
  } catch (error) {
    console.log(error);
  }
}
