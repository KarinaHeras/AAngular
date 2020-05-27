import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { PostModule } from './business/post/post.module';
import { PrivateRegistryComponent } from './login/private-registry/private-registry.component';
import { RegistryComponent } from './login/registry/registry.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { HomeModule } from './public/home.module';
import { HomeComponent } from './public/home/home.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent},
  { path: '**', redirectTo: 'home' },

];
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    RegistryComponent,
    PrivateRegistryComponent,


  ],

  imports: [
    BrowserModule,
    PostModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeModule,
    PostModule,
    FormsModule,

    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
