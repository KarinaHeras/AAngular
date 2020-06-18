import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Post } from '../business/Model/post.model';
import { PostService } from '../business/post/post.service';
import { NotificacionesBusService } from '../notificaciones-bus.service';
import { PostDetailStoreService } from '../store/post-detail-store.service';

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {

  deleteCommentSub: Subscription;
  post$: Observable<Post>;
  editPostBtn: boolean;
  editCommentBtn: boolean;
  id: string;
  error: string;
  token: string;
  postID: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storePostDetail: PostDetailStoreService,
    private storePost: PostService,
    private notificationsBus: NotificacionesBusService
  ) { }

  ngOnInit(): void {

    this.editPostBtn = false;
    this.editCommentBtn = false;


    this.postID =  this.activatedRoute.snapshot.paramMap.get('id');
    this.storePostDetail.init(this.postID);
    this.post$ = this.storePostDetail.get$();

    this.token = localStorage.getItem('token');
  }

  editPost(){
    this.editPostBtn = !this.editPostBtn;
  }

  deletePost(){
    this.storePost.deletePost$(this.postID);
    this.router.navigate(['backOffice']);
    this.notificationsBus.showWarn('Tu publicación ha sido eliminada correctamente!' );
  }

  backOffice(){
    this.router.navigate(['backOffice']);
  }

  updateComment$(id: string, comment: Comment){
    this.storePostDetail.updateComment$(id, comment);
  }

}
