import { Component, OnInit } from '@angular/core';
import { Business } from '../business';
import { BusinessService } from '../business.service';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
  
export class BusinessComponent implements OnInit {
  business: Business;
  businesses = [];
  http;

 
  constructor(private businessService: BusinessService, http:HttpClient) {
    this.http = http;
  }


  ngOnInit(): void {
    this.businessService.getBusinessList().subscribe((res: Response) => {
      console.log(res)
      Object.entries(res).forEach(result => {
      const [_, value] = result;
       let name = value['name'];
       let description = value['description']
       let businessObject = new Business(name,description)
       this.businesses.push(businessObject)
      });
    });
  }
  }







