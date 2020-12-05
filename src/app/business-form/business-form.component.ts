import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Business } from '../business';

@Component({
  selector: 'app-business-form',
  templateUrl: './business-form.component.html',
  styleUrls: ['./business-form.component.css']
})
export class BusinessFormComponent implements OnInit {

  newBusiness = new Business('', '');
  
  @Output() addBusiness = new EventEmitter<Business>();
  submitBusiness(){
    this.addBusiness.emit(this.newBusiness);
    this.newBusiness = new Business('','');
    
  }
 
  


  constructor() { }

  ngOnInit(): void {
  }

}


  


  

