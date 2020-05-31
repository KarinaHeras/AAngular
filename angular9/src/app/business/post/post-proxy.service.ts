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
  getPost(postId: number): Observable<PostDto> {
  return this.httpClient.get<PostDto>(`${this.URL}/${postId}`);
  }
  post$(post: PostDto): Observable<PostDto> {
  return this.httpClient.post<PostDto>(this.URL, { post });
  }
  patch$(postId: number, post: PostDto): Observable<PostDto> {
  return this.httpClient.patch<PostDto>(`${this.URL}/${postId}`, { post });
  }
  delete$(postId: number): Observable<PostDto> {
  return this.httpClient.delete<PostDto>(`${this.URL}/${postId}`);
  }
}
