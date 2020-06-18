import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from 'src/app/business/Model/post.model';
import { PostService } from 'src/app/business/post/post.service';

@Component({
  selector: 'app-post-edit-card',
  templateUrl: './post-edit-card.component.html',
  styleUrls: ['./post-edit-card.component.css']
})
export class PostEditCardComponent implements OnInit {
  getAll$: Observable<Post>;
  id: string;
  constructor(  public service: PostService,
                private route: ActivatedRoute,
                private router: Router
  ) { }

  ngOnInit(): void {
    this.findById();
  }

  findById(): void {
    this.id = this.route.snapshot.params.id;
    this.getAll$ = this.service.findById(this.id);
  }
  }
