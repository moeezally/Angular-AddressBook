import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = "Moeez's Tracker";
  toggle:string="Hide";
  
  constructor() { }

  ngOnInit(): void {
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
