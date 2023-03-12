/**
 * On search term not found the provided message will display on screen.
 * @param {HTMLElement} container Error message container.
 */
export function postNotFoundError(container) {
  //
  container.innerHTML = `<div class="container vh-100">
                            <div class="row text-center my-3">
                                <div>
                                    <img class="img-fluid" src="./assets/images/backgroundImages/errorDisplayImg.png" alt="">
                                </div>
                                <h3 class="">Something went wrong</h3>
                                <p>The post/author you are looking for was not found in our database, please try again.</p>
                            </div>
                        </div>`;
}
