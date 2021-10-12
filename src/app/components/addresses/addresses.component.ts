import { Component, OnInit } from '@angular/core';
import {address} from '../../address';
import {AddressService} from '../../services/address.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addresses',
  templateUrl: './addresses.component.html',
  styleUrls: ['./addresses.component.css']
})
export class AddressesComponent implements OnInit {

  addresses: address[] =[];
  toggle:string="Hide";
  

  constructor(private addressService: AddressService, private router:Router) { }

  ngOnInit(): void {
    this.addressService.getAddresses().subscribe((addresses) => this.addresses=addresses);
  }

  onUpdate(address:address){
    this.router.navigateByUrl(`/update/${address.id}`)
  }

  onDelete(address:address){
    console.log(address)
    this.addressService
    .deleteAddress(address)
    .subscribe(
      () => (this.addresses = this.addresses.filter((a)=>a.id!==address.id))
    );
  }

  toggleDrawer(){
    let page=document.getElementById("addressItems");
   
    if(page!=null){      
      if(page.hidden==true){
        page.hidden=false;    
        this.toggle="Hide";
                  
      
      }
      else{
        page.hidden=true;        
        this.toggle="Show";      
      }
      
      
    }    
  }

}
