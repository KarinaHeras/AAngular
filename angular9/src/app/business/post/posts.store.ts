import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Store } from '../store';
import { Post } from './post.model';
import { PostService } from './post.service';

@Injectable({providedIn: 'root'})
export class PostsStores extends Store<Post[]>{


  constructor(private service: PostService){
    super();
  }

// este metodo almacena y gestiona el  estado en memoria
// llama al servicio y los post que devuelve, los que devuelve los mete en el store
  init(): Promise<Post[]>{
    return this.service.getAllPost().pipe(
      tap(this.store)
    ).toPromise();
  }


// aqui le añadimos los post que tenemos en  memoria
//
create(post: Post): Promise<Post> {
  return this.service.createPost(post).pipe(
  tap(newPost => {
  this.store([newPost, ...this.get()]);
          })
      ).toPromise();
  }


    create$(post: Post): Promise<Post> {
    return this.service.createPost(post).pipe(
    tap(postResult => {
    this.store([postResult, ...this.get()]);
            })
        ).toPromise();
    }
    // update$(id: string, post: Post): Promise<Post>
    //  { return this.service.updatePost(id, post).pipe(
    //    tap(() => {
    //   const posts = this.get();
    //   const p = Object.assign({}, post);
    //   const index = this.searchIndex(posts, id);
    //   const newPosts = [...posts.slice(0, index), p, ...posts.slice(index \+1)];
    //   this.store(newPosts); })
    //       ).toPromise();
    //   }
      // delete$(postId: number): Promise<Post> {
      // return this.service.delete$(postId).pipe(
      // tap(() => {
      // const posts = this.get();
      // const newPosts = posts.filter(post => post.postId !== postId); this.store(newPosts);
      //         })
      //     ).toPromise();
      // }
      // private searchIndex(posts: Post[], postId: number): number { return posts.findIndex(item => item.postId === postId);
      // }
    }
