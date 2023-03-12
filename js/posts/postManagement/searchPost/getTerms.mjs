/**
 * 
 * @param {array} postsArray An array of posts to search through.
 * @param {string} term The search term to match against post titles and author names.
 * @returns Returns an array of posts that match the specified search term.
 */
export function getSearchTerms(postsArray, term) {
  return postsArray.filter((post) => {
    const postTitle = post.title.toLowerCase();
    const author = post.author.name.toLowerCase();
    return postTitle.includes(term) || author.includes(term);
  });
}
