import { Component, OnInit } from '@angular/core';
import { address } from './../../address';
import {AddressService} from '../../services/address.service';
import {Router, ActivatedRoute} from '@angular/router';
''

@Component({
  selector: 'app-update-record',
  templateUrl: './update-record.component.html',
  styleUrls: ['./update-record.component.css']
})
export class UpdateRecordComponent implements OnInit {
  id: string='';
  constructor(private route: ActivatedRoute,private addressService: AddressService, private router:Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];   
    console.log(this.id);     
  }

  updateAddress(address:address){

    console.log(address);
    this.addressService
    .updateAddress(address)
    .subscribe(()=> this.router.navigate(['']))
   
    
  }

}
