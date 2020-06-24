import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { PostDetail } from 'src/app/business/Model/postDetail';
import { PostDetailService } from 'src/app/store/post-detail.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  post: Observable<PostDetail>;
  id: string;
  constructor( private activatedRoute: ActivatedRoute, private proxy: PostDetailService) { }

  ngOnInit(): void {
    this.getPostAll();
  }
  getPostAll() {
    this.id = this.activatedRoute.snapshot.params.id;
    this.proxy.findById(this.id);
  }

  }




