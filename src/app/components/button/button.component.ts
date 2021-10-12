import { Component, OnInit, Input, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  btn:string="btn";

  @Input()
  text: string|undefined;

  @Input()
  class: string|undefined;

  @Output()
  btnClick =new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.btnClick.emit();        
  }

}
