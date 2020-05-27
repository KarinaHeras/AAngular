import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDto } from './post.dto';


@Injectable({
  providedIn: 'root'
})
export class PostProxyService {
  private URL = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }



getAllPost(): Observable<PostDto[]>{
  return this.httpClient.get<PostDto[]>(this.URL + '/posts');
}
//   getUsers(){
//     return this.httpClient.get(this.URL + './post')
//       .subscribe(res => {
//         console.log(res);
//       });
//   }

// getPosts(): Observable<any> {
//     return this.httpClient.get(this.URL + './post');
//   }


newPost(): Observable<any>{
    return this.httpClient.get(this.URL + './post');
  }


}
