import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../post.model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @Input() post: Post;
  @Output() removed = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }


  delete() {
    this.removed.emit(this.post);
  }

  }


  // savePost(){
  //   this.httpClient.post(`${this.URL}/post`, this.post)
  //     .subscribe((res: any) => {
  //       console.log(res);
  //       this.post.push(res.savePost);
  //     });
  // }




