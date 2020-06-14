 import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Post } from 'src/app/business/Model/post.model';
import { PostService } from 'src/app/business/post/post.service';
import { Store } from './store';
// import { tap } from 'rxjs/operators';
// import { Post } from '../app/business/Model/post.model';

 @Injectable({providedIn: 'root'})
export class PostsStores extends Store<Post[]>{


  constructor(private service: PostService){
    super();
  }

// // este metodo almacena y gestiona el  estado en memoria
// // llama al servicio y los post que devuelve, los que devuelve los mete en el store

init(): Promise<Post[]> {
  if (this.get()) { return; }
  return this.service.getAll.pipe(
      tap(posts => this.store(posts))
  ).toPromise();
}

createPost$(post: Post): Promise<Post> {
  return this.service.create(post).pipe(
      tap(postResult => {
          this.store([...this.get(), postResult]);
      })).toPromise();
}

updatePost$(postId: string, post: Post): Promise<Post> {
  return this.service.update(postId, post).pipe(
      tap(newPost => {
          const posts = this.get();
          const p = Object.assign({}, newPost);
          const index = this.searchIndex(posts, postId);
          const newPosts = [...posts.slice(0, index), p, ...posts.slice(index + 1)];
          this.store(newPosts);
      })
  ).toPromise();
}

deletePost$(postId: string): Promise<Post> {
  return this.service.deletePost(postId).pipe(
      tap(() => {
          const posts = this.get();
          const newPosts = posts.filter(post => post._id !== postId);
          this.store(newPosts);
      })).toPromise();
}

private searchIndex(posts: Post[], postId: string): number {
  return posts.findIndex(item => item.id === postId);
}
}
