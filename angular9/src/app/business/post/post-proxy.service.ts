import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostDto } from '../Model/post.dto';
import { Post } from '../Model/post.model';
import { postModelDto } from '../Model/postModelDto';
import { Posts } from '../Model/postmodelFrom';


@Injectable({
  providedIn: 'root'
})
export class PostProxyService {
  readonly URL = 'http://localhost:3000';
  selectedPosts: Posts ;
  posts: Post[];

constructor(private httpClient: HttpClient) {
// this.selectedPosts = new Posts();
}

getAllPost$(): Observable < PostDto[] > {
    return this.httpClient.get<PostDto[]>(this.URL);
    }
get$(postId: number): Observable < PostDto > {
    return this.httpClient.get<PostDto>(`${this.URL}/${postId}`);
    }
post$(post: PostDto): Observable < PostDto > {
    return this.httpClient.post<PostDto>(this.URL, { post });
    }
savePost(post): Observable < PostDto > {
      return this.httpClient.post<PostDto>(this.URL, { post });
    }
updatePost$(postId: number, post: PostDto): Observable < PostDto > {
    return this.httpClient.put<PostDto>(`${this.URL}/${postId}`, { post });
    }
delete$(postId: number): Observable < PostDto > {
    return this.httpClient.delete<PostDto>(`${this.URL}/${postId}`);
    }
addComment(id, comment): Observable < postModelDto > {
      return this.httpClient.post<postModelDto>(`${this.URL}/${id}/comment`, comment);
    }

updateComment(id, comment): Observable < postModelDto > {
      return this.httpClient.put<postModelDto>(`${this.URL}/comments/${id}`, comment);
    }

deleteComment(id): Observable < postModelDto > {
      return this.httpClient.delete<postModelDto>(`${this.URL}/comments/${id}`);
    }
  }
