/**
 * @returns This returns the users comment form input.
 */

export function userCommentInput() {
  const commentPostForm = document.querySelector("form#postCommentForm");
  const newFormData = new FormData(commentPostForm);
  return JSON.stringify({
    body: newFormData.get("postBody"), // Optional
  });
}
