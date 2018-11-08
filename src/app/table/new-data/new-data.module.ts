import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableService } from '../table.service';
import { AddDataComponent } from '../add-data/add-data.component';
import { TableComponent } from '../table.component';
import { FormsModule } from '@angular/forms';
import { MatTableModule, MatButtonModule, MatIconModule, MatInputModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { routes } from 'src/app/routing';
import { SpreadSheetsModule } from "@grapecity/spread-sheets-angular";
import { HttpClientModule } from '@angular/common/http';
import { ExcelPageComponent } from '../excel-page/excel-page.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,MatTableModule,
    RouterModule.forRoot(routes),MatButtonModule,MatIconModule,
    MatInputModule,SpreadSheetsModule,HttpClientModule
  ],
  declarations: [AddDataComponent,TableComponent,ExcelPageComponent],
  
  providers: [TableService],
})
export class NewDataModule { }
