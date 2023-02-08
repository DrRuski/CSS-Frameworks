const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzA3LCJuYW1lIjoiZGFkeSIsImVtYWlsIjoiRGFuRHlyNzcxNTdAc3R1ZC5ub3JvZmYubm8iLCJhdmF0YXIiOm51bGwsImJhbm5lciI6bnVsbCwiaWF0IjoxNjc1ODU1OTA4fQ.nAvo_mYNHr-_E9h9FndDDyw8mdvwL2yxOBpXVWH4R94";
localStorage.setItem("accessToken", token);
export const baseUrl = "https://nf-api.onrender.com";

// Get top 100 posts no filter
export async function fetchPosts(url) {
  try {
    const accessToken = localStorage.getItem("accessToken");
    const getData = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };
    const response = await fetch(url, getData);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
