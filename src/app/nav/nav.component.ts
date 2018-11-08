import { Component, OnInit } from '@angular/core';
import { SignupLoginService } from '../signupLogin/signup-login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private sign: SignupLoginService) { }

  ngOnInit() {
  }
  signout(){
    this.sign.signOut();
  }
}
