export function getLikedFilter(postsArray) {
  return postsArray.filter((post) => {
    return post._count.reactions;
  });
}
//
export function newOldFilter(postsArray) {
  return postsArray.sort((a, b) => new Date(a.created) - new Date(b.created));
}
//
export function oldNewFilter(postsArray) {
  return postsArray.sort((a, b) => new Date(b.created) - new Date(a.created));
}
