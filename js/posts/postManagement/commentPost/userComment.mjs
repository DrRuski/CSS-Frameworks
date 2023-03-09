export function userCommentInput() {
  const commentPostForm = document.querySelector(".test");
  const newFormData = new FormData(commentPostForm);
  return JSON.stringify({
    body: newFormData.get("postBody"), // Optional
  });
}
