import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {FormControl,FormGroup,FormBuilder} from '@angular/forms';
import { address } from './../../address';
import {AddressService} from '../../services/address.service';


@Component({
  selector: 'app-update-address-form',
  templateUrl: './update-address-form.component.html',
  styleUrls: ['./update-address-form.component.css']
})
export class UpdateAddressFormComponent implements OnInit {

  @Output() onUpdateAddress:EventEmitter<address>=new EventEmitter(); 
  @Input() id:string|undefined;
  updateAddress:address={
    id:'',
    city:'',
    country:'',
    gender:'',
    name:''
  };

  constructor(private addressService: AddressService) { }

  updateForm= new FormGroup({
    id:new FormControl(''),
    name:new FormControl(''),
    city:new FormControl(''),
    country:new FormControl(''),
    gender:new FormControl(''),
  })

  ngOnInit(): void {
    console.log(this.id),
    this.addressService
    .getAddress(this.id)
    .subscribe((address)=>(
      console.log(address),
      this.updateForm= new FormGroup({
        id: new FormControl(address.id),
        name:new FormControl(address.name),
        city:new FormControl(address.city),
        country:new FormControl(address.country),
        gender:new FormControl(address.gender),
      })
    ))
    
  }
  

  onSubmit(updateForm:any){
    if(!updateForm.controls.name.value || !updateForm.controls.city.value || !updateForm.controls.country.value || !updateForm.controls.gender.value){
      alert('Please complete the form!')
      return;
    }
    this.updateAddress.id=updateForm.controls.id.value;
    this.updateAddress.name=updateForm.controls.name.value;
    this.updateAddress.city=updateForm.controls.city.value;
    this.updateAddress.country=updateForm.controls.country.value;
    this.updateAddress.gender=updateForm.controls.gender.value;
    
    console.log(this.updateAddress);

    this.onUpdateAddress.emit(this.updateAddress);

    // this.addressService
    // .addAddress(this.updateAddress)
    // .subscribe()    
  }

}
