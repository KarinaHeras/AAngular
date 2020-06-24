import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { Store } from 'src/store/store';
import { CommentModel } from '../business/Model/CommentModel';
import { PostDto } from '../business/Model/post.dto';
import { Post } from '../business/Model/post.model';
import { PostProxyService } from '../business/post/post-proxy.service';

@Injectable({
  providedIn: 'root'
})
export class CommentsService extends Store<Post> {
  private url = 'http://localhost:3001/comments';

  constructor(private httpClient: HttpClient, private proxy: PostProxyService) {
    super();
  }

  init(id): Promise<Post> {
    return this.proxy.getAllPost$(id).pipe(
        tap(post => this.store(post))
    ).toPromise();
}
  createComment(postId, comment): Observable<CommentModel>{
    return this.httpClient.post<CommentModel>(`${this.url}/${postId}`, comment);
  }

  modifyComment(commentId, comment): Observable<CommentModel> {
    return this.httpClient.put<CommentModel>(`${this.url}/${commentId}`, comment);
  }

  deleteComment(commentId): Observable<CommentModel> {
    return this.httpClient.delete<CommentModel>(`${this.url}/${commentId}`);
  }
  adaptDTOToPost(postDTO: Post): PostDto {
    return {
        _id: postDTO._id,
        nickname: postDTO.nickname,
        nameAuthor: postDTO.nameAuthor,
        title: postDTO.title,
        content: postDTO.content,
        comments: postDTO.comments
    };
}
}
