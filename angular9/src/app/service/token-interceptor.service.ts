import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService {

  constructor(private authservice: AuthService ) { }


  // para autenticacion se añade a la cabecera
  // el metodo le permite añadir header y luego la utorizacion,
  intercept(req, next){
   const tokenizeReq = req.clone({
      setHeader: {
        Autorization: `Bearer ${this.authservice.getToken()}`
      }
    });
   return next.handle(tokenizeReq);
// el handle añade una cabecera en cada peticion
  }

}
