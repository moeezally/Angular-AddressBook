import { Injectable } from '@angular/core';
import {address} from '../address'
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private apiUrl = 'http://localhost:8080/adbook2_war_exploded/api/address/'

  constructor(private server: HttpClient) { }


  getAddresses(): Observable<address[]>{
    return this.server.get<address[]>(this.apiUrl);    

  }

  deleteAddress(address:address): Observable<address>{
    const url=`${this.apiUrl}/${address.id}`;
    return this.server.delete<address>(url);
  }

  addAddress(address:address):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};

    return this.server.post<address>(this.apiUrl, address, httpOptions);
  }

  updateAddress(address:address):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })};
      console.log(address.id);
      const url=`${this.apiUrl}${address.id}`;
    return this.server.put<address>(url, address, httpOptions);
  }

  getAddress(id:any):Observable<address>{
    return this.server.get<address>(`${this.apiUrl}${id}`);
  }
}


