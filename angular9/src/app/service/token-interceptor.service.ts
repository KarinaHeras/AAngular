import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private authservice: AuthService ) { }

  // para autenticacion se añade a la cabecera
  intercept(req, next){
   const tokenizeReq = req.clone({
      setHeader: {
        Autorization: `Bearer ${this.authservice.getToken()}`
      }
    });
   return next.handle(tokenizeReq);

  }



}
