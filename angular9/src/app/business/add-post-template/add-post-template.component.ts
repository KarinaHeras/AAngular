import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../post/post.model';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-add-post-template',
  templateUrl: './add-post-template.component.html',
  styleUrls: ['./add-post-template.component.css']
})
export class AddPostTemplateComponent implements OnInit {

  post: Post = new Post();
  formSubmitted = false;
  productTypes = [];
  constructor(private postService: PostService, private router: Router) {
  }

  ngOnInit() {
  }

  addPost() {
    this.postService.addPost(this.post).subscribe(result => {
      this.formSubmitted = true;
      this.router.navigateByUrl('/posts');
    });
  }
}
