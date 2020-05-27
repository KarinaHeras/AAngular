import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { PostService } from 'src/app/business/post/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 posts: Observable<any>;

  constructor( private service: PostService) { }

  ngOnInit(): void {

    // llamo al servicio y el sevicio llama al back
     this.posts = this.service.getAllPost();
    //  .subscribe(res => {
    //     this.posts = res;
    //     console.log(this.posts);

    //      });
  }

}
