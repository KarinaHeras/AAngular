import { HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';


@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
   constructor(private authService: AuthService) {}
//   intercept(req: HttpRequest < any > , next: HttpHandler): Observable < HttpEvent < any >> {
//     // Obtenemos el token
//     const token: string = localStorage.getItem('token');

// // Importante: modificamos de forma inmutable, //haciendo el clonado de la petición
//     const authReq = req.clone(
//       {headers: req.headers.set('Authorization', `Bearer ${this.authService.getToken()}`)}
//     );
// // Pasamos al siguiente interceptor de //la cadena la petición modificada
//     return next.handle(authReq);
//  }








//  para; autenticacion; se; añade; a; la; cabecera;
//  el; metodo; le; permite; añadir; header; y; luego; la; utorizacion;,
//  para; autenticacion; se; añade; a; la; cabecera;
//   el; metodo; le; permite; añadir; header; y; luego; la; utorizacion;,
  intercept(req, next){
    const tokenizeReq = req.clone({
       setHeader: {
         Autorization: `Bearer  ${this.authService.getToken()}`
       }
     });
    return next.handle(tokenizeReq);
   // el; handle; añade; una; cabecera; en; cada; peticion;
   }
  }

