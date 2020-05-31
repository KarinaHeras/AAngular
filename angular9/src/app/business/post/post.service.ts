import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { PostProxyService } from './post-proxy.service';
import { PostDto } from './post.dto';
import { Post, User } from './post.model';
@Injectable({providedIn: 'root'})
export class PostService {

  private posts: Post[];
  private users: User[];
  private URL = 'http://localhost:3000';

  constructor(private proxyServi: PostProxyService , private httpClient: HttpClient) {}

    private handleError<P>(operation = 'operation', result?: P) {
      return (error: any): Observable<P> => {
  // TODO: envía el error a la infraestructura de registro remoto
        console.error(error);

  // Deje que la aplicación siga ejecutándose devolviendo un resultado vacío.
        return of(result as P);
      };
    }
  //   this.users = [
  //     {
  //       id: 0,
  //       rol: 'Anonimo'
  //     },
  //     {
  //       id: 1,
  //       rol: 'Admin'
  //     },
  //     {
  //       id: 2,
  //       rol: 'publisher'
  //     }
  //   ];
  //   this.posts = [];


getAllPost(): Observable < Post[] > {
    return this.proxyServi.getAllPost().pipe(
      map((postsDto: PostDto[]) => {
        let posts: Post[] = [];
        postsDto.forEach((postDto: PostDto) => {
          const post: Post = {
            _id: postDto._id,
            title: postDto.title,
            content: postDto.content,
            nameAuthor: postDto.nameAuthor,
            nickname: postDto.nameAuthor,
           // user: 0

          };
          posts = [... posts, post];

        });
        return posts;
      })
    );

  }

  // createPost(post: Post): Observable<Post> {
  //   return this.proxyServi.post$(this.adaptModelTODTO(post)).pipe(
  //   map((postResult: PostDto) => { return {
  //   ...post };
  //   }) );
  //   }

addPost(post: Post): Observable <Post[]> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  return this.httpClient.post<Post[]>(this. URL, post, httpOptions).pipe(
    tap(p => console.log(`added post with id=${p.id}`)),
    catchError(this.handleError<Post[]>('addPost'))
  );
}

getPost(id: number): Observable<Post[]>{
  const url = `${this. URL}/${id}`;
  return this.httpClient.get<Post[]>(url).pipe(
    tap(_ => console.log(`fetched post id=${id}`)),
    catchError(this.handleError<Post[]>(`getHero id=${id}`))
  );
}

removePost(post: Post | number): Observable <Post[]> {
  const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  const id = typeof post === 'string' ? post : post._id;
  const url = `${this. URL}/${id}`;

  return this.httpClient.delete<Post[]>(url, httpOptions).pipe(
    tap(_ => console.log(`deleted Post id=${id}`)),
    catchError(this.handleError<Post[]>('deletePost'))
  );
}

}
