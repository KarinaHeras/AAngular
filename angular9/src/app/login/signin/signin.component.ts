import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 user: any;
  constructor(private authservice: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = {
      username: 'admin1',
      password: '4321',
    };
    console.log(this.user);
  }


  signIn(){
    this.authservice.signIn(this.user)
     .subscribe(
       res => {
          console.log(res);
       },
       err => console.log(err)
     );
   }
}
