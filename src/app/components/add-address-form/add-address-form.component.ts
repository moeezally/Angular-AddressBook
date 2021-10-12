import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { address } from './../../address';

@Component({
  selector: 'app-add-address-form',
  templateUrl: './add-address-form.component.html',
  styleUrls: ['./add-address-form.component.css']
})
export class AddAddressFormComponent implements OnInit {

  @Output() onAddAddress:EventEmitter<address>=new EventEmitter(); 
  
  newAddress:address={
    city:'',
    country:'',
    gender:'',
    name:''
  };

  constructor() { }

  ngOnInit(): void {
  }

  addForm= new FormGroup({
    name:new FormControl(''),
    city:new FormControl(''),
    country:new FormControl(''),
    gender:new FormControl(''),
  })

  onSubmit(addForm:any){
    if(!addForm.controls.name.value || !addForm.controls.city.value || !addForm.controls.country.value || !addForm.controls.gender.value){
      alert('Please complete the form!')
      return;
    }
    this.newAddress.name=addForm.controls.name.value;
    this.newAddress.city=addForm.controls.city.value;
    this.newAddress.country=addForm.controls.country.value;
    this.newAddress.gender=addForm.controls.gender.value;
    
    console.log(this.newAddress);

    this.onAddAddress.emit(this.newAddress);

    // this.addressService
    // .addAddress(this.newAddress)
    // .subscribe()    
  }

}
