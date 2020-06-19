import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { BackofficeProxyService } from '../backoffice/backoffice-proxy.service';
import { PostDto } from '../business/Model/post.dto';
import { Post } from '../business/Model/post.model';
import { PostDetail } from '../business/Model/postDetail';
import { PostDetailDto } from '../business/Model/postDetailDto';

@Injectable({
  providedIn: 'root'
})
export class PostDetailService {

  constructor(private proxy: BackofficeProxyService) { }

  getAllPost(): Observable<Post[]> {
    return this.proxy.getAllPost().pipe(
      map((postsDto: PostDto[]) => {
        let posts: Post[] = [];
        postsDto.forEach((postDTO: PostDto) => {
          posts = [...posts, this.adaptPostDTOToModel(postDTO)];
        });
        return posts;
      })
    );
  }

  getPostById(id: string): Observable<Post> {
    return this.proxy.getPostById(id).pipe(
      map((postDTO: PostDto) => this.adaptPostDTOToModel(postDTO))
    );
  }

  savePost(post: Post): Observable<Post> {
    return this.proxy.savePost(this.adaptPostModelToDTO(post)).pipe(
      map((postResult: PostDto) => this.adaptPostDTOToModel(postResult))
    );
  }

  updatePost(id: string, post: Post): Observable<Post> {
    return this.proxy.updatePost(id, this.adaptPostModelToDTO(post)).pipe(
      map((postResult: PostDto) => this.adaptPostDTOToModel(postResult))
    );
  }

  deletePost(id: string): Observable<Post> {
    return this.proxy.deletePost(id).pipe(
      map(postDTO => this.adaptPostDTOToModel(postDTO))
    );
  }

  addComment(id: string, comment: PostDetail): Observable<PostDetail> {
    return this.proxy.addComment(id, this.adaptPostDetailModelToDTO(comment)).pipe(
      map((postDetailResult: PostDetailDto) => this.adaptPostDetailDTOToModel(postDetailResult))
    );
  }

  updateComment(id: string, comment: PostDetail): Observable<PostDetail> {
    return this.proxy.updateComment(id, this.adaptPostDetailModelToDTO(comment)).pipe(
      map((postDetailResult: PostDetailDto) => this.adaptPostDetailDTOToModel(postDetailResult))
    );
  }

  deleteComment(id: string): Observable<PostDetail> {
    return this.proxy.deleteComment(id).pipe(
      map(postDetailDTO => this.adaptPostDetailDTOToModel(postDetailDTO))
    );
  }



  private adaptPostDTOToModel(postDTO: PostDto): Post {
    return {
      _id?: postDTO.id,
      nickname: postDTO.nickname,
      idAuthorId: postDTO.idAuthor,
      title: postDTO.title,
      content: postDTO.content,
      comments: postDTO.comments
    };
  }

  private adaptPostModelToDTO(post: Post): PostDto {
    return {
      id: post._id,
      nickname: post.nickname,
      title: post.title,
      content: post.content,
      comments: post.comments
    };
  }

  private adaptPostDetailDTOToModel(postDetailDTO: PostDetailDto): PostDetail {
    return {
      _id: postDetailDTO._id,
      authorId: postDetailDTO.authorId,
      nickname: postDetailDTO.nickname,
      comment: postDetailDTO.comment,
      date: postDetailDTO.date
    };
  }

  private adaptPostDetailModelToDTO(postDetail: PostDetail): PostDetailDto {
    return {
      _id: postDetail._id,
      authorId: postDetail.authorId,
      nickname: postDetail.nickname,
      comment: postDetail.comment,
      date: postDetail.date
    };
  }


  }

