import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddRecordComponent} from './pages/add-record/add-record.component';
import {HomeComponent} from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import {UpdateRecordComponent} from './pages/update-record/update-record.component';


const routes: Routes = [
  {
    path:'', 
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'addNewRecord',
    component:AddRecordComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'update/:id',
    component:UpdateRecordComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
