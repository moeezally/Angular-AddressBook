import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { address } from './../../address';
import {AddressService} from '../../services/address.service';
import {Router} from '@angular/router';
 
@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {

  // @Output() onAddAddress:EventEmitter<address>=new EventEmitter();  

  // newAddress:address={
  //   city:'',
  //   country:'',
  //   gender:'',
  //   name:''
  // };

  constructor(private addressService: AddressService, private router:Router) { }

  ngOnInit(): void {
  }

  

  // onSubmit(addForm:any){
  //   if(!addForm.controls.name.value || !addForm.controls.city.value || !addForm.controls.country.value || !addForm.controls.gender.value){
  //     alert('Please complete the form!')
  //     return;
  //   }
  //   this.newAddress.name=addForm.controls.name.value;
  //   this.newAddress.city=addForm.controls.city.value;
  //   this.newAddress.country=addForm.controls.country.value;
  //   this.newAddress.gender=addForm.controls.gender.value;
    
  //   console.log(this.newAddress);

  //   this.onAddAddress.emit(this.newAddress);

  //   // this.addressService
  //   // .addAddress(this.newAddress)
  //   // .subscribe()    
  // }

  addAddress(address:address){

    console.log(address);
    this.addressService
    .addAddress(address)
    .subscribe(()=> this.router.navigate(['']))
   
    
  }
}
