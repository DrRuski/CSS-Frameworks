import { renderFollowers } from "./renderFollowers.mjs";
export function setupRenderFollowers(followers) {
  followers.forEach((post) => renderFollowers(post));
}
