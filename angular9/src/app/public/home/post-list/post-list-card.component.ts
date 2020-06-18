import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from 'src/app/business/Model/post.model';
import { PostService } from 'src/app/business/post/post.service';

@Component({
  selector: 'app-post-list-card',
  templateUrl: './post-list-card.component.html',
  styleUrls: ['./post-list-card.component.css']
})
export class PostListCardComponent implements OnInit {

getAll$: Observable<Post[]>;

  constructor(private service: PostService, private router: Router) { }

ngOnInit(): void {
    this.getAllPost();
  }

getAllPost(): void{
  console.log('llego al get');
  this.getAll$ = this.service.getAll();
  }

submit() {
    this.router.navigateByUrl('home');
  }
}
