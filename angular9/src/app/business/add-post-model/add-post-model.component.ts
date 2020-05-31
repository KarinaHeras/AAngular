import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Post } from '../post/post.model';
import { PostService } from '../post/post.service';

@Component({
  selector: 'app-add-post-model',
  templateUrl: './add-post-model.component.html',
  styleUrls: ['./add-post-model.component.css']
})
export class AddPostModelComponent implements OnInit {

  listaPost = ['title'];

  formSubmitted = false;
  myForm: FormGroup;

  title: FormControl;
  nombreAuthor: FormControl;
  content: FormControl;
  listapost: FormControl;



  constructor(private postService: PostService,
              private router: Router) { }

  ngOnInit() {

    this.title = new FormControl('', [Validators.required, Validators.minLength(10)]);
    this.nameAuthor = new FormControl();
    this.title = new FormControl('', Validators.pattern('[a-zA-Z]*'));
    this.listaPost = new FormControl('', Validators.required);
    this.content = new FormControl('', Validators.required);

    this.myForm = new FormGroup({
      title: this.title,
      nameAuthor: this.nameAuthor,
      listaPost: this.listaPost,
      content: this.content,

    });

  }

  addPost(post: Post) {
    this.postService.addPost(post).subscribe(result => {
      this.formSubmitted = true;
      this.router.navigateByUrl('/products');
    });
  }

}
