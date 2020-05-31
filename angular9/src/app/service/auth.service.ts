import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private URL2 = 'http://localhost:3000/auth';

  constructor(private http: HttpClient, private router: Router) { }

// metodo login
  signIn(user){
    const basicAuth  = btoa(`${user.username}:${user.password}`);
   // console.log('basicCCCCC', basicAuth);
    const httpOptions = { headers: new HttpHeaders({Authorization: 'Basic ' + basicAuth }) };
   // return this.httpClient.post<any>
   // console.log('userAuth-Service', user);
    return this.http.post<any>(this.URL2 + '/login', {}, httpOptions);
  }


  // metodo para registro
  signUp(user){
    const basicAuth  = btoa(`${user.username}:${user.password}`);
    const httpOptions = { headers: new HttpHeaders({Authorization: 'Basic ' + basicAuth }) };
    // console.log('soy user', user);
    return this.http.post<any>('http://localhost:3000/users', {}, httpOptions);

  }


  // metodo para saber si el usuario esta logeado
  loggedIn(){
    return !!localStorage.getItem('token');
    // if (localStorage.getItem('token')){
    //   return true;
    // }

  }

  // // este metodo retornar el token que se ha guardado
  getToken(){
     return localStorage.getItem('token');

   }
  // // cerrar sesion, elimina el token y asi elimina los datos del usuario
  // logout(){
  //   localStorage.removeItem('token');
  //   return this.router.navigate(['/signin']);
  // }

  }


