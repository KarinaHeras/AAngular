import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from '../backoffice/post-detail/post-detail.component';
import { CreatePostComponent } from './post/create-post/create-post.component';
import { PostEditComponent } from './post/post-edit/post-edit.component';
import { PostListComponent } from './post/post-list/post-list.component';

const routes: Routes = [
  { path: '', component: PostListComponent},
  { path: '', component: CreatePostComponent},
  { path: '', component: PostEditComponent},
  { path: '', component: PostDetailComponent}
];

@NgModule({
  declarations: [CreatePostComponent, PostListComponent, PostEditComponent, PostDetailComponent],
  imports: [
    CommonModule,
  FormsModule,
  HttpClientModule,


  RouterModule.forChild(routes)


  ],

})
export class PostModule {


}
