import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { AddressesComponent } from './components/addresses/addresses.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AddRecordComponent } from './pages/add-record/add-record.component';
import { UpdateRecordComponent } from './pages/update-record/update-record.component';
import { AddAddressFormComponent } from './components/add-address-form/add-address-form.component';
import { UpdateAddressFormComponent } from './components/update-address-form/update-address-form.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    AddressesComponent,
    HomeComponent,
    LoginComponent,
    AddRecordComponent,
    UpdateRecordComponent,
    AddAddressFormComponent,
    UpdateAddressFormComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
