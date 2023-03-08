export function viewFollowing(follower) {
  const viewFollowingVariable = follower.following.map((element) => element.name);
  return viewFollowingVariable;
}
