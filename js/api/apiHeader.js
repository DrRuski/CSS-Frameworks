
const apiToken = {
  headers: {
    Authorization:
      "",
  },
};

const url = `https://api.noroff.dev/api/v1/social/posts`;

async function getPosts() {
  try {
    const response = await fetch(url, apiToken);
    const json = await response.json();

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

// getPosts();
