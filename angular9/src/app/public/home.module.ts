import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { CreatePostComponent } from '../business/post/create-post/create-post.component';
import { PostEditComponent } from '../business/post/post-edit/post-edit.component';
import { PostListComponent } from '../business/post/post-list/post-list.component';
import { PrivateRegistryComponent } from '../login/private-registry/private-registry.component';
import { RegistryComponent } from '../login/registry/registry.component';
import { SigninComponent } from '../login/signin/signin.component';
import { SignupComponent } from '../login/signup/signup.component';
import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
  { path: '', component:  HomeComponent},
  {path: '', component:  HomeComponent},
  { path: '', redirectTo: '/registry', pathMatch: 'full' },
  { path: 'registry', component:  RegistryComponent},
  { path: 'private', component:   PrivateRegistryComponent, canActivate: [AuthGuard]},
  { path: 'signup', component:  SignupComponent},
  { path: 'signin', component:  SigninComponent},
  // { path: 'post', redirectTo: 'post/index', pathMatch: 'full'},
  { path: 'post/list', component: PostListComponent },
   { path: 'post/create', component: CreatePostComponent },
   { path: 'post/:postId/edit', component: PostEditComponent }



];
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,

    RouterModule.forChild(ROUTES)
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
