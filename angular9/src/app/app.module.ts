import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ToastModule } from 'primeng/toast';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
import { PostModule } from './business/post/post.module';
import { PrivateRegistryComponent } from './login/private-registry/private-registry.component';
import { RegistryComponent } from './login/registry/registry.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { HomeModule } from './public/home.module';
import { HomeComponent } from './public/home/home.component';
import { TokenInterceptorService } from './service/token-interceptor.service';


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
    PanelModule,
    MenubarModule,
    DialogModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,

    RouterModule.forRoot(ROUTES)
  ],
  providers: [AuthGuard,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true,
   // MessageService,
    // ConfirmationService

  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
