import { deleteUserPost } from "../../index.mjs";
export function getDeleteBtn(post) {
  const deletePostBtn = document.querySelector("#deletePostBtn");
  const postID = post.id;
  deleteUserPost(deletePostBtn, postID);
}
