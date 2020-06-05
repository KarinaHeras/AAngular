import { Injectable } from '@angular/core';
import { tap } from 'rxjs/internal/operators/tap';
import { Post } from 'src/app/business/Model/post.model';
import { PostService } from 'src/app/business/post/post.service';
import { PostListStoreService } from './postListStore';
import { Store } from './store';

@Injectable({ providedIn: 'root' })

export class StoreService extends Store<Post[]> {


  constructor(private service: PostService, private listsStore: PostListStoreService) {
        super();
    }

    init(): Promise<Post[]> {
        if (this.get$()) { return; }
        return this.service.getAll.pipe(tap(post => this.store(post))
        ).toPromise();
    }

    createPost$(post: Post): Promise<Post> {
        return this.service.create(post).pipe(
            tap(postResult => {
                this.store([...this.get$, postResult]);
            })).toPromise();
    }

    updatePost$(postId: string, post: Post): Promise<Post> {
        return this.service.update('postId', post).pipe(
            tap(newPost => {
                const posts = this.get$();
                const p = Object.assign({}, newPost);
                const index = this.searchIndex(posts, posts);
                const newPosts = [...posts.slice(0, index), p, ...posts.slice(index + 1)];
                this.store(newPosts);
            })
        ).toPromise();
    }


    deletePost$(postId: number): Promise<Post> {
        return this.service.delete(postId).pipe(
            tap(() => {
                const posts = this.get();
                const newPosts = posts.filter(post => post.id !== postId);
                this.store(newPosts);
            })).toPromise();
    }

    private searchIndex(posts: Post[], postId: string) {
        return posts.findIndex(item => item.id === postId);

    }
}
