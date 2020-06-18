import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Store } from 'src/store/store';
import { Post } from '../business/Model/post.model';
import { PostService } from '../business/post/post.service';

@Injectable({
  providedIn: 'root'
})
export class PostDetailStoreService extends Store<Post[]> {

  constructor(

    private postService: PostService,
    private postStore: Store) {
    super();
}

init(id): Promise<Post>{
    return this.postService.getPublicPost(_id).pipe(tap(post => this.store(post)))
    .toPromise();
}






updatePost$(postId: string, post: Post): Promise<Post> {
    return this.postService.update(postId, post).pipe(
        tap((newPost) => {
            const postUpdate = this.get();
            const p = Object.assign({}, newPost);
            const updatePost = {...p, postComments: postUpdate.postComments};
            this.store(update);
            this.postStore.updatePost$(updatePost);
    })
    ).toPromise();
}


private searchIndex(posts: Post[], postId: string) {
    return posts.findIndex(item => item._id === postId);
}

}

