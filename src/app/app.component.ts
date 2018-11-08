import { Component } from '@angular/core';
import { AngularFireFunctions } from "@angular/fire/functions";
import { AngularFireDatabase } from "@angular/fire/database";
import * as admin from 'firebase-admin';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, ActivatedRoute, RouterState } from '@angular/router';
import { SignupLoginService } from './signupLogin/signup-login.service';
import { TableService } from './table/table.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private auth:AngularFireAuth,private route:Router,
              private routs:ActivatedRoute,private sign:SignupLoginService,
              private table:TableService){
    const data =auth.authState.subscribe(a=>{
      if(a == null){
        this.sign.flag = "signup";
        this.route.navigate(["Login"]);
      }else{
        this.table.currentUser = a;
        this.sign.flag = "logout";
        this.sign.currentUser=a;
        // this.route.navigate(["Table"]);
      }
    });
  }
  ngOnInit(){
  } 
}
