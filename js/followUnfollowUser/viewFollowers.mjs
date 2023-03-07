export function viewFollowers(follower) {
  const viewFollowersVariable = follower.following.map((element) => element.name);
  return viewFollowersVariable;
}
