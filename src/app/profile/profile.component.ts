import { Component, OnInit } from '@angular/core';
import { HoodService } from '../hood.service'
import { HttpClient } from '@angular/common/http';
import { SignupComponent } from '../signup/signup.component'
import { from } from 'rxjs';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: HoodService, http: HttpClient) {

  }

  ngOnInit(): void {
    this.service.currentUser().subscribe((res:Response)=>{
      console.log(res['logged'])
    })

    // $http({ method: 'POST', url: '/someUrl' }).
    //   success(function (data) {
    //     //process aswer
    //   });

  }

}
