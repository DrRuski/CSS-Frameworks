export function getDateFilter(postsArray) {
  const filteredByDate = postsArray.filter((post) => {
    return post.created;
  });
  return filteredByDate.sort((a, b) => {
    return new Date(b.created) - new Date(a.created);
  });
}

export function getLikedFilter(postsArray) {
  return postsArray.filter((post) => {
    return post._count.reactions;
  });
}
