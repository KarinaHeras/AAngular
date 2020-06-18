import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router
  ) { }
    canActivate(): boolean{
      if (this.authService.loggedIn()){
       window.alert('acceso permitido!');
       return true;
      }
      this.router.navigate(['/login']);
      return false;
    }

}

  // constructor(private authService: AuthService, private router: Router){}
  // canActivate(): boolean{
  //   if (this.authService.loggedIn()){
  //     return true;
  //   }
  //   this.router.navigate(['/login']);
  //   return false;
  // }
// }



