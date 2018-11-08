import { Component, OnInit } from '@angular/core';
import { SignupLoginService } from '../signupLogin/signup-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private singlog:SignupLoginService) { }

  ngOnInit() {
  }

  login(e,p){
    this.singlog.login(e,p)
  }

  googlelogin(){
    this.singlog.googlelogin();
  } 
}
