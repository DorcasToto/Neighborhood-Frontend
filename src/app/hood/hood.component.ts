import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Hoodclass } from '../hoodclass'
import { HoodService } from '../hood.service'



@Component({
  selector: 'app-hood',
  templateUrl: './hood.component.html',
  styleUrls: ['./hood.component.css']
})
export class HoodComponent implements OnInit {
  hood: Hoodclass;
  hoods = [];
  http;

  constructor(private hoodservice: HoodService, http: HttpClient) {
    this.http = http;
  }

  ngOnInit(): void {
    let accessToken = localStorage.getItem('accessToken')
    this.hoodservice.getHoodList(accessToken).subscribe((res: Response) => {
  
      Object.entries(res).forEach(result => {
        const [_, value] = result;
       let name = value['hoodName'];
       let location = value['hoodLocation']
       let photo = value['photo']
       let occupant = value['occupants_count']
       console.log(occupant)
       let admin = value['admin']
       let hoodObject = new Hoodclass(name,photo,location,occupant,admin)
       this.hoods.push(hoodObject)
       
      });
    });
  }

}
