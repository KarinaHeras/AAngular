import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../post.model';
import { PostService } from '../post.service';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  post: Post;


constructor(private activatedRoute: ActivatedRoute, private postService: PostService){}
  ngOnInit(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    console.log('ID : ' + id);
    // this.loaderService.showLoader();
    this.postService.getPost(id).subscribe(
      posts => {
      this.post = posts;

      }
    );
  }

}






