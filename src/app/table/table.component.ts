import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Student } from '../Student';
import { TableService } from './table.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  student:Student = new Student();
  displayedColumns: string[] = ['Id', 'Name', 'Age', 'Desc','FileName','Time','Image'];
  //itemCollecton: AngularFirestoreCollection<Student>;
  items: Observable<any[]>;
  constructor(private table:TableService ,private auth:AngularFireAuth, private afSotre:AngularFirestore) {
    // if(this.table.currentUser){
      this.auth.authState.subscribe(data=>{
        this.table.itemCollecton = this.afSotre.collection(data.uid);
        this.items = this.table.itemCollecton.valueChanges();
      });
    // } 
  }
  ngOnInit() {}

  downloadFile(data){
    console.log(data)
    this.table.download(data);
  }
  addStudent(student){
    this.table.addItem(student)
  }
}
