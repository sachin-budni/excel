import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Student } from '../Student';
import { Observable } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/storage';
import { UploadExcelFile } from '../UploadExcelFile';

// import * as GC from '@grapecity/spread-sheets';
// import * as Excel from '@grapecity/spread-excelio';
// import '@grapecity/spread-sheets-charts';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  itemCollecton: AngularFirestoreCollection<Student>;
  items: Observable<any[]>;
  downloadURL;
  student:Student = new Student();

  // spreadBackColor = 'aliceblue';
  // hostStyle = {
  //   width: '95vw',
  //   height: '80vh'
  // // };
  // private spread: GC.Spread.Sheets.Workbook;
  // private excelIO;

  constructor(private auth:AngularFireAuth,private afSotre:AngularFirestore,private afStorage:AngularFireStorage) {
    this.itemCollecton = this.afSotre.collection<Student>('student')
    this.items = this.itemCollecton.valueChanges();
    // this.excelIO = new Excel.IO();
   }

   addItem(student: Student) {
    const id = this.afSotre.createId();
    this.itemCollecton.add({Id:id,Name:student.Name,Age:student.Age,Desc:student.Desc});
  }


  private basePath:string = '/uploads';
 // uploads: FirebaseListObservable<Upl[]>;

  pushUpload(upload: UploadExcelFile) {
    let storageRef = this.afStorage.storage.ref();//firebase.storage().ref();
    console.log(storageRef);
    console.log(upload.file);
    // storageRef.put(upload.file);
    // storageRef.put(upload.file);
    //  let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);
    // console.log(uploadTask);
    this.downloadURL = this.afStorage.ref("/uploads/Book1.xlsx").getDownloadURL();
    console.log(this.afStorage.ref("/uploads/Book1.xlsx").getDownloadURL());
    // storageRef.getDownloadURL()
    // this.onFileChange(this.downloadURL)
    // const randomId = Math.random().toString(36).substring(2);
    // this.ref = this.afStorage.ref(randomId);
    // this.task = this.ref.put(event.target.files[0]);
    // this.uploadProgress = this.task.percentageChanges();
    // this.downloadURL = this.task.downloadURL();
  }

  // onFileChange(args) {
  //   const self = this, file = args.srcElement && args.srcElement.files && args.srcElement.files[0];
  //   console.log(file);
  //   if (self.spread && file) {
  //     self.excelIO.open(file, (json) => {
  //       self.spread.fromJSON(json, {});
  //       setTimeout(() => {
  //         alert('load successfully');
  //       }, 0);
  //     }, (error) => {
  //       alert('load fail');
  //     });
  //   }
  // }


  // // Writes the file details to the realtime db
  // private saveFileData(upload: Upload) {
  //   this.db.list(`${this.basePath}/`).push(upload);
}

// <progress max="100" [value]="(uploadProgress | async)"></progress>
// const randomId = Math.random().toString(36).substring(2);
//   this.ref = this.afStorage.ref(randomId);
//   this.task = this.ref.put(event.target.files[0]);
//   this.uploadProgress = this.task.snapshotChanges()
//     .pipe(map(s => (s.bytesTransferred / s.totalBytes) * 100));