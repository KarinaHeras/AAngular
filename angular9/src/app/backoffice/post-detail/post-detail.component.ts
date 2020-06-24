import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from 'src/app/business/post/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css'],

})
export class PostDetailComponent implements OnInit {

  post: any;
  id: string;
  constructor( private activatedRoute: ActivatedRoute, private proxy: PostService) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost() {
    this.id = this.activatedRoute.snapshot.params.id;
    const res = this.proxy.findById(this.id).subscribe(data =>
         this.post = data);

  }

  }




