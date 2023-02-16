import { getPosts } from "../../getPosts.mjs";

export async function getPostTitle(url) {
  const postData = await getPosts(url);
  postData.map((e) => {
    return JSON.stringify(e.title.toLowerCase());
  });
}
