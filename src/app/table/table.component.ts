import { Component, OnInit } from '@angular/core';
import { SignupLoginService } from '../signupLogin/signup-login.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Student } from '../Student';
import { TableService } from './table.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  student:Student = new Student();
  displayedColumns: string[] = ['Id', 'Name', 'Age', 'Desc'];
  itemCollecton: AngularFirestoreCollection<Student>;
  items: Observable<any[]>;
  constructor(private table:TableService ,private afSotre:AngularFirestore) { 
    this.itemCollecton = this.afSotre.collection<Student>('student')
    this.items = this.itemCollecton.valueChanges();
  }
  ngOnInit() {}

  addStudent(student){
    this.table.addItem(student)
  }
}
