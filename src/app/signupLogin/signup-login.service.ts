import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SignupLoginService {
  flag:string;
  currentUser;
  constructor(private auth:AngularFireAuth,private route:Router) { }

  login(email,password){
    this.auth.auth.signInWithEmailAndPassword(email,password).then(a=>{
      alert(a);
      this.flag = "logout";
      this.currentUser = a;
      this.route.navigate(["/Table"]);
    }).catch(err=>{
      alert(err);
    });
  }
  
  googlelogin(){
    this.auth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
      ).then(a=>{
        alert(a);
        this.currentUser = a;
        this.flag = "logout";
        this.route.navigate(["/Table"]);
      }).catch(err=>{
        alert(err);
      })
    }
    
    signUp(email,password){
      this.auth.auth.createUserWithEmailAndPassword(email,password).then(a=>{
        alert(a);
        this.flag = "logout";
        this.currentUser = a;
      this.route.navigate(["/Table"]);
    }).catch(err=>{
      alert(err);
    });
  }

  signOut(){
    this.auth.auth.signOut().then(a=>{
      alert(a);
      this.flag = "signup";
      this.currentUser = undefined;
      this.route.navigate(["/Login"]);
    }).catch(err=>{
      console.log(err);
    })
  }
}
