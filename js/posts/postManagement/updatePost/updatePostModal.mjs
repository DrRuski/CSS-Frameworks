const main = document.querySelector("main");

export function createPostModal() {
  main.innerHTML = `<div class="modal fade" id="updatePostModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="updatePostTitle">Update Current Post</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form class="col-lg-4" id="newPostForm">
                    <div class="form-floating mb-3">
                    <input name="title" type="text" class="form-control" id="postTitle" placeholder="Post Title" required minlength="3" />
                    <label for="postTitle">Post Title</label>
                    </div>
        
                    <div class="input-group mb-3">
                    <input name="media" type="url" class="form-control" id="postImg" />
                    <label class="input-group-text" for="postImg">Image URL</label>
                    </div>
        
                    <div class="form-floating mb-3">
                    <input name="hashTag" type="text" class="form-control" id="postHashtags" placeholder="Add Tags" />
                    <label for="postHashtags">Add Tags</label>
                    </div>
        
                    <div class="mb-3">
                    <textarea name="postBody" class="form-control" id="postContent" rows="5" placeholder="Write your post caption here..."
                        minlength="5"></textarea>
                    </div>
        
                    <button class="btn btn-primary btn-sm">Update Post <i class="fa-solid fa-up-right-from-square"></i></button>
                </form>

            </div>
          </div>
        </div>
      </div>`;
}
