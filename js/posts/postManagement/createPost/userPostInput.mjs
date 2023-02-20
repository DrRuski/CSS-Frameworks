export function userPostInput() {
  const newPostForm = document.querySelector("form#newPostForm");
  const newFormData = new FormData(newPostForm);
  return JSON.stringify({
    title: newFormData.get("title"), // Required
    body: newFormData.get("postBody"), // Optional
    tags: [newFormData.get("hashTag")], // Optional
    media: newFormData.get("image"), // Optional
  });
}

// submitBtn.addEventListener("click", (e) => {
//     const form = document.getElementById("form");
//     const formData = new FormData(form);
//     const email = formData.get("useremail");
//     const name = formData.get("username");
//     const password = formData.get("password");

//     registerUser(email, name, password);
//   });
