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
      console.log(res['business_set'])
      Object.entries(res['business_set']).forEach(result => {
      const [_, value] = result;
        let name = value['businessName'];
        let photo = value['photo'];
        let user = value['user'];
        let email = value['businessEmail'];
        let businessObject = new Business(name,photo,user,email)
        this.businesses.push(businessObject)
      });
    });
  }
  }







