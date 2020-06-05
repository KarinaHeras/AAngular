import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';
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
    HttpClientModule,
    ReactiveFormsModule,
    HomeModule,
    FormsModule,


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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
