export function userCommentInput() {
  const commentPostForm = document.querySelector("form#commentPostForm");
  const newFormData = new FormData(commentPostForm);
  return JSON.stringify({
    body: newFormData.get("postBody"), // Optional
  });
}
