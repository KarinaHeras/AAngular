import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDto } from '../business/Model/post.dto';
import { PostDetailDto } from '../business/Model/postDetailDto';
@Injectable({
  providedIn: 'root'
})
export class BackofficeProsyService {

  constructor(private httpClient: HttpClient) { }

  getAllPost(): Observable<PostDto[]> {
    return this.httpClient.get<PostDto[]>('http://localhost:3000/api/post');
  }

  getPostById(id: string): Observable<PostDto> {
    return this.httpClient.get<PostDto>(`http://localhost:3000/api/posts/${id}`);
  }

  savePost(post): Observable<PostDto> {
    return this.httpClient.post<PostDto>('http://localhost:3000/api/posts', post);
  }

  updatePost(id, post): Observable<PostDto> {
    return this.httpClient.put<PostDto>(`http://localhost:3000/api/posts/${id}`, post);
  }

  deletePost(id): Observable<PostDto> {
    return this.httpClient.delete<PostDto>(`http://localhost:3000/api/posts/${id}`);
  }

  addComment(id, comment): Observable<PostDetailDto> {
    return this.httpClient.post<PostDetailDto>(`http://localhost:3000/api/posts/${id}/comment`, comment);
  }

  updateComment(id, comment): Observable<PostDetailDto> {
    return this.httpClient.put<PostDetailDto>(`http://localhost:3000/api/comments/${id}`, comment);
  }

  deleteComment(id): Observable<PostDetailDto> {
    return this.httpClient.delete<PostDetailDto>(`http://localhost:3000/api/comments/${id}`);
  }



}
