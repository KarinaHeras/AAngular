import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostProxyService } from './post-proxy.service';
import { PostDto } from './post.dto';
import { Post, User } from './post.model';
@Injectable()
export class PostService {

  private posts: Post[];
  private users: User[];


  constructor(private proxyServi: PostProxyService) {
    this.users = [
      {
        id: 0,
        rol: 'Anonimo'
      },
      {
        id: 1,
        rol: 'Admin'
      },
      {
        id: 2,
        rol: 'publisher'
      }
    ];
    this.posts = [];
  }

  getAllPost(): Observable<Post[]>{
    return this.proxyServi.getAllPost().pipe(
      map((postsDto: PostDto[]) => {
        let posts: Post[] = [];
        postsDto.forEach((postDto: PostDto) => {
          const post: Post = {
            _id: postDto._id,
            title: postDto.title,
            content: postDto.content,
            author: postDto.nameAuthor,
            nickname: postDto.nameAuthor,
            user: 0

          };
          posts = [... posts, post];

        });
        return posts;
      })
    );


  }
  getUsers(){
    return this.users;

  }
getPosts() {
    return this.posts;
  }


newPost(): Post {
    return {
      _id: '',
      author: '',
      nickname: '',
      title: '',
      content: '',
      user: 0
    };
  }
  }

