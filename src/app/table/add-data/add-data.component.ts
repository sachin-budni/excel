import { Component, OnInit } from '@angular/core';
import { TableService } from '../table.service';
import { Student } from 'src/app/Student';
import { UploadExcelFile } from 'src/app/UploadExcelFile';
import { FileDetails } from './FileDetails';

// import * as GC from '@grapecity/spread-sheets';
// import * as Excel from '@grapecity/spread-excelio';
// import '@grapecity/spread-sheets-charts';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {
  student:Student = new Student();
  // selectedFiles: FileList;
  currentUpload: UploadExcelFile; 
  // spreadBackColor = 'aliceblue';
  // hostStyle = {
  //   width: '95vw',
  //   height: '80vh'
  // };
  // private spread: GC.Spread.Sheets.Workbook;
  // private excelIO;

  constructor(private table:TableService){//,private http: HttpClient) {
    // this.excelIO = new Excel.IO();
   }

  ngOnInit() {
  }
  addStudent(n,a,d){
    this.student.Name = n;
    this.student.Age = a;
    this.student.Desc = d;
    this.table.addItem(this.student)
  }
  UploadExcelFile(event){
    console.log(event.target.files[0]);
    let file:UploadExcelFile = new UploadExcelFile();
    file.createdAt = event.target.files[0].lastModified;
    file.name = event.target.files[0].name;
    file.file = event.target.files[0].size;
    this.student.ExcelFileUpload = file;

    this.table.selectedFiles = event.target.files;
    // let file = this.selectedFiles.item(0)
    // this.currentUpload = new FileDetails(file);
    // this.table.pushUpload(this.currentUpload)
    // this.table.pushUpload();
  }

  // workbookInit(args) {
  //   const self = this;
  //   self.spread = args.spread;
  //   const sheet = self.spread.getActiveSheet();
  //   // sheet.getCell(0, 0).text('Test Excel').foreColor('blue');
  //   // sheet.getCell(1, 0).text('Test Excel').foreColor('blue');
  //   // sheet.getCell(2, 0).text('Test Excel').foreColor('blue');
  //   // sheet.getCell(3, 0).text('Test Excel').foreColor('blue');
  //   // sheet.getCell(0, 1).text('Test Excel').foreColor('blue');
  //   // sheet.getCell(1, 1).text('Test Excel').foreColor('blue');
  //   // sheet.getCell(2, 1).text('Test Excel').foreColor('blue');
  //   // sheet.getCell(3, 1).text('Test Excel').foreColor('blue');
  //   // sheet.getCell(0, 2).text('Test Excel').foreColor('blue');
  //   // sheet.getCell(1, 2).text('Test Excel').foreColor('blue');
  //   // sheet.getCell(2, 2).text('Test Excel').foreColor('blue');
  //   // sheet.getCell(3, 2).text('Test Excel').foreColor('blue');
  //   // sheet.getCell(0, 3).text('Test Excel').foreColor('blue');
  //   // sheet.getCell(1, 3).text('Test Excel').foreColor('blue');
  //   // sheet.getCell(2, 3).text('Test Excel').foreColor('blue');
  //   // sheet.getCell(3, 3).text('Test Excel').foreColor('blue');
  //   sheet.addRows(1,2);
  //   sheet.addColumns(1,2);
  // }
  // lock:Blob;
  // onFileChange() {
  //    const self = this;// file = args.srcElement && args.srcElement.files && args.srcElement.files[0];
  //   // console.log(file);
  //   let data;
  //   if (self.spread && this.table.downloadURL) {
  //     this.table.downloadURL.subscribe(data=>{
  //       self.http.get(data,{responseType :'blob'}).subscribe(datas=>{
  //         // var xhr = createCORSRequest('GET', datas);
  //         // if (!xhr) {
  //         //   throw new Error('CORS not supported');
  //         // }
  //         console.log(datas.type);
  //         console.log(datas.size);
  //         self.excelIO.open(datas,(json)=>{
  //           let jsondata = json;
  //           console.log(jsondata);
  //           self.spread.fromJSON(jsondata,{});
  //           setTimeout(() => {
  //               alert('load successfully');
  //             }, 0);
  //           }, (error) => {
  //             alert('load fail');
  //           });
  //         // })
  //       })
        
        
  //       // var oreq = new  XMLHttpRequest();
  //       // oreq.open('get',data,true);
  //       // oreq.responseType = 'blob';
  //       // // oreq.onload =  function(){
  //       //   var blob = oreq.response;
  //       //   self.excelIO.open(blob,function(json){
  //       //     let jsondata = json;
  //       //     self.spread.fromJSON(jsondata,{});
  //       //   },function(message){
  //       //     console.log(message);
  //       //   })
  //       // // }
  //     });
  //   }
  // }
  // onFileChanges(args){
  //   const self = this, file = args.srcElement && args.srcElement.files && args.srcElement.files[0];
  //   console.log(file)
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
}