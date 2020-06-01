import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostListComponent } from './post-list/post-list.component';

const routes: Routes = [
  { path: '', component: PostListComponent},
  { path: '', component: CreatePostComponent}
];

@NgModule({
  declarations: [CreatePostComponent, PostListComponent],
  imports: [
    CommonModule,
  FormsModule,
  HttpClientModule,
  DialogModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,

  RouterModule.forChild(routes)


  ],

})
export class PostModule {


}
