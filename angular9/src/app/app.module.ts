import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { BackofficeModule } from './backoffice/backoffice.module';
import { CreatePostComponent } from './business/post/create-post/create-post.component';
import { PostEditComponent } from './business/post/post-edit/post-edit.component';
import { PostListComponent } from './business/post/post-list/post-list.component';
import { PrivateRegistryComponent } from './login/private-registry/private-registry.component';
import { RegistryComponent } from './login/registry/registry.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { HomeModule } from './public/home.module';
import { PostEditCardComponent } from './public/home/post-edit-card/post-edit-card.component';
import { PostListCardComponent } from './public/home/post-list/post-list-card.component';
import { TokenInterceptorService } from './service/token-interceptor.service';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:  PostListCardComponent},
  { path: '**', redirectTo: 'home' },

];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    RegistryComponent,
    PrivateRegistryComponent,
    PostEditComponent,
    PostListComponent,
    CreatePostComponent,
    PostEditCardComponent,
    PostListCardComponent,

  ],

  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeModule,
    FormsModule,
    CommonModule,
    BackofficeModule,


    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
    // MessageService,
    // ConfirmationService,

  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
