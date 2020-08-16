import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/business/Model/post.model';
import { PostService } from 'src/app/business/post/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],

})
export class PostDetailComponent implements OnInit {
  id: number;
  post: Post;
  constructor( private activatedRoute: ActivatedRoute, private proxy: PostService,  private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.postId;
    this.proxy.find(this.id).subscribe((data: Post) => {
      this.post = data;
    });
  }

}
  // ngOnInit(): void {
  //   this.getPost();
  // }
  // getPost() {
  //   this.id = this.activatedRoute.snapshot.params.id;
  //   const res = this.proxy.findById(this.id).subscribe(data =>
  //        this.post = data);

  // }






