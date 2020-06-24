import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CreatePostComponent } from '../business/post/create-post/create-post.component';
import { PostEditComponent } from '../business/post/post-edit/post-edit.component';
import { PostListComponent } from '../business/post/post-list/post-list.component';
import { PrivateRegistryComponent } from '../login/private-registry/private-registry.component';
import { SigninComponent } from '../login/signin/signin.component';
import { SignupComponent } from '../login/signup/signup.component';
import { HomeComponent } from '../public/home/home.component';
import { PostListCardComponent } from '../public/home/post-list/post-list-card.component';
import { BackofficeComponent } from './backoffice.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

const ROUTES: Routes = [
  { path: '', component:  HomeComponent},
  { path: 'private', component:   PrivateRegistryComponent, canActivate: [AuthGuard]},
  { path: 'signup', component:  SignupComponent},
  { path: 'signin', component:  SigninComponent},
   { path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
   { path: 'post/list', component: PostListComponent },
   { path: 'post/create', component: CreatePostComponent },
   { path: 'post/:postId/edit', component: PostEditComponent },
   { path: '', component: PostListCardComponent },
   { path: '', redirectTo: '/post/card', pathMatch: 'full' }
];


@NgModule({
  declarations: [BackofficeComponent, PostDetailComponent],
  imports: [
    CommonModule
  ]
})
export class BackofficeModule { }
