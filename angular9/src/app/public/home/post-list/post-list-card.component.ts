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
  // @Input() cerrar: any = null;
  // @Output() post = new EventEmitter();
  // postDetailbtn: null;
getAll$: Observable<Post[]>;
isCollapsed = true;
constructor(private service: PostService, private router: Router, private route: ActivatedRoute) { }

ngOnInit(): void {
    this.getAllPost();
  }

getAllPost(): void{
  console.log('llego al get');
  this.getAll$ = this.service.getAll();
  console.log('estos son los post', this.getAll$);
  }

submit() {
    this.router.navigateByUrl('home');
  }

  // onSelect(event){
  //   let query = null;
  //   if (event.values == 'post') {
  //   query = this.service.getAll();
  //   }
  //   else {
  //   query = this.service.getPublicPost();
  //   query.subcribe(post => {
  //     this.post = post;
  //   });
  //   this.post = null;
  //   }
  //   }


// onCerrar(){
//     this.cerrar.emit();
//   }

// onClick(id: string){
//   console.log('muestro el boton con id', id);
//   this.router.navigate([`post/detail/${id}`], {relativeTo: this.route});
//   console.log('muestro el boton despues');

//   }

// cerrarDetalles(){
//     this.post = null;
//   }

toggleCollapse(id: string) {
    console.log('muestro el boton con id', id);
    this.isCollapsed = !this.isCollapsed;
    this.router.navigate([`post/detail/${id}`], {relativeTo: this.route});
    console.log('muestro el boton despues');

  }
}


