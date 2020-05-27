import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  { path: 'private', component:   PrivateRegistryComponent},
  { path: 'signup', component:  SignupComponent},
  { path: 'signin', component:  SigninComponent},




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
