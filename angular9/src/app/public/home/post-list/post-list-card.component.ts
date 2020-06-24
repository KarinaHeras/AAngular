import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
postSeleccionado: Post;
post: Post;
  constructor(
    private service: PostService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

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

 onClick(id: string){
  console.log('muestro el boton con id', id);
  this.router.navigate([`post/detail/${id}`], {relativeTo: this.route});
  console.log('muestro el boton despues');

  }
  onSelectPost(id: string): void{
    console.log('Post seleccionado ' + id);
    this.router.navigate([`post/detail/${id}`]);

    this.postSeleccionado = this.post;
  }
 }


