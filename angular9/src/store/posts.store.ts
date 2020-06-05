 import { Injectable } from '@angular/core';
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
