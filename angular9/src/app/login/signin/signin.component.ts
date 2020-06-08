import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user = {
    username: '',
    password: '',
  };
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {


  }

signIn(){
  this.authservice.signIn(this.user)
   .subscribe(
     res => {
       localStorage.setItem('token', res.access_token);
       this.router.navigate(['/private']);
     },
     err => console.log(err)
   );
 }
}
