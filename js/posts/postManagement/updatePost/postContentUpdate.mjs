export function userContentUpdate() {
  const updateFormPost = document.querySelector("form#updatePostForm");
  const updateContent = new FormData(updateFormPost);
  return JSON.stringify({
    title: updateContent.get("title"), // Required
    body: updateContent.get("postBody"), // Optional
    tags: [updateContent.get("hashTag")], // Optional
    media: updateContent.get("media"), // Optional
  });
}
