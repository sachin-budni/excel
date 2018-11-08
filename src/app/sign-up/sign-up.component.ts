import { Component, OnInit } from '@angular/core';
import { SignupLoginService } from '../signupLogin/signup-login.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private signup:SignupLoginService) { }

  ngOnInit() {
  }
  signUp(e,p){
    this.signup.signUp(e,p);
  }
  signOut(){
    this.signup.signOut();
  }
}
