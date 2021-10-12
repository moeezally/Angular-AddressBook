import { Component, OnInit } from '@angular/core';
import {address} from '../../address'
import {AddressService} from '../../services/address.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
  }

  // addAddress(address:address){

  //   console.log(address);
  //   this.addressService
  //   .addAddress(address)
  //   .subscribe()   
  // }


}
