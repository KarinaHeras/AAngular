import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: '', component: PostListComponent}
];
@NgModule({
  declarations: [CreatePostComponent, PostListComponent],
  imports: [
    CommonModule,
  FormsModule,
  HttpClientModule,
  RouterModule.forChild(routes)


  ],

})
export class PostModule {


}
