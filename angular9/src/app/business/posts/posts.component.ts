import { Component, OnInit } from '@angular/core';
import { Post } from '../post/post.model';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {

  }

  ngOnInit() {
  //  this.loaderService.showLoader();
    this.postService.getAllPost()
    .subscribe(
      posts => {
        this.posts = posts;
      }
      );
  }

  deletePost(post: Post) {
    this.postService.removePost(post).subscribe();
    this.postService.getAllPost()
      .subscribe(
      posts => {
      this.posts = posts;
      }
      );
  }
}
