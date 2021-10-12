import { Component, OnInit, Input,Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input() email:string|undefined;
  @Input() password:string|undefined;
  number:number=124;

  constructor() { }

  ngOnInit(): void {
  }

  onsubmit(){
    console.log(this.email+",  "+this.password);
  }
}
