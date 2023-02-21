export function getSearchTerms(postsArray, term) {
  return postsArray.filter((post) => {
    const postTitle = post.title.toLowerCase();
    const author = post.author.name.toLowerCase();
    return postTitle.includes(term) || author.includes(term);
  });
}
