import { LoginComponent } from "./login/login.component";
import { Routes } from '@angular/router';
import { SignUpComponent } from "./sign-up/sign-up.component";
import { TableComponent } from "./table/table.component";
import { AddDataComponent } from "./table/add-data/add-data.component";
import { ExcelPageComponent } from "./table/excel-page/excel-page.component";

export const routes:Routes =[
    { path: 'Login', component: LoginComponent },
    { path: 'Signup', component: SignUpComponent },
    { path: 'Table', component: TableComponent },
    { path: 'Table/NewData', component: AddDataComponent },
    { path: 'Table/Excel', component: ExcelPageComponent },
    { path: '',redirectTo: '/Login',pathMatch: 'full'},
    { path: '**', redirectTo: '/Login',pathMatch: 'full'}
]