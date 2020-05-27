import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostModule } from './business/post/post.module';
import { HomeModule } from './public/home.module';
import { HomeComponent } from './public/home/home.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component:  HomeComponent},
  { path: '**', redirectTo: 'home' }
];
@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    PostModule,
    HttpClientModule,
    ReactiveFormsModule,
    HomeModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
