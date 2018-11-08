import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { AngularFireFunctionsModule } from "@angular/fire/functions";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { routes } from './routing';
import { SignupLoginService } from './signupLogin/signup-login.service';
import { FormsModule } from '@angular/forms';
import {MatTableModule, MatToolbarModule, MatIconModule, MatButtonModule, MatInputModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NewDataModule } from './table/new-data/new-data.module';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,AngularFireModule.initializeApp(environment.config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    AngularFireFunctionsModule,
    AngularFireStorageModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AngularFirestoreModule.enablePersistence(),FormsModule,
    RouterModule.forRoot(routes),
    MatTableModule,BrowserAnimationsModule,NewDataModule,
    MatInputModule
  ],
  providers: [SignupLoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
