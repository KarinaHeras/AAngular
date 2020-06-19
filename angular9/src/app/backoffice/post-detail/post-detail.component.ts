import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/business/Model/post.model';
import { PostService } from 'src/app/business/post/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  isCollapsed = true;
  // tslint:disable-next-line: no-input-rename
  @Input('post') post: Post;
// @Input() post: any = null;
  // @Output() cerrar = new EventEmitter();

constructor(private postServi: PostService) { }

toggleCollapse(){
  this.isCollapsed = !this.isCollapsed;
}

  ngOnInit() {
  }

//   onSelect(event){
//     let query = null;
//     if (event.values == 'post') {
//     query = this.postServi.getAll();
//     }
//     else {
//     query = this.postServi.getPublicPost();
//     query.subcribe(post => {
//       this.post = post;
//     });
//     this.post = null;
//     }
//     }


// onCerrar(){
//     this.cerrar.emit();
//   }

// onClick(post){
//     this.post = post;
//   }

// cerrarDetalles(){
//     this.post = null;
//   }

}
