import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from 'src/app/service/auth.service';
import { Post } from '../../Model/post.model';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  publicPost$: Observable<string>;
  protectedPost$: Observable<string>;

  // si el formulario existe refresca
  posts: Post[] = [];
userId: string;
  constructor(private postService: PostService, private authServi: AuthService) { }

  ngOnInit(): void {
    this.publicPost$ = this.postService.getPublicPost();
    this.protectedPost$ = this.postService.getProtectedPost();

    this.postService.getAll().subscribe((data: Post[]) => {
      this.posts = data;
      console.log(this.posts);
    });
  }


  deletePost(_id){
    console.log(' NOOOOOOOO--------llego al subcribe');

    this.postService.deletePost(_id).subscribe(res => {
      console.log('------------llego al subcribe');
      this.posts = this.posts.filter(item => item._id !== _id);
      console.log('Post deleted!');
    });
  }

}

