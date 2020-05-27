import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post, User } from '../post.model';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  formularioPost = new FormGroup ({
    author: new FormControl(''),
    nickname: new FormControl(''),
    title: new FormControl(''),
    content: new FormControl(''),
    user: new FormControl('')



  });



  constructor( private postService: PostService, private httpClient: HttpClient) { }

  // BakenURL = 'http//localhost:3001/api';

  private post: Post;
  private users: User[];




  ngOnInit() {
    //  this.httpClient.get(`${this.BakenURL}/post`)
    //   .subscribe(res => {
    //     this.post = res;
    //     console.log(this.post);

    //   });
     // this.users = this.postService.getUsers();
  }


  // savePost(){
  //   this.httpClient.post(`${this.BakenURL}/post`, this.post)
  //     .subscribe((res: any) => {
  //       console.log(res);
  //       this.post.push(res.savePost);
  //     });
  // }

// metodo para guardar el fromControl, asi parametrisamos el formulario
newPost(){
  console.log(this.formularioPost.value);

}

  }



