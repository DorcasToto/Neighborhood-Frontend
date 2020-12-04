import { Component, Input, OnInit } from '@angular/core';
import { Business } from '../business';

@Component({
  selector: 'app-business-detail',
  templateUrl: './business-detail.component.html',
  styleUrls: ['./business-detail.component.css']
})
export class BusinessDetailComponent implements OnInit {

  @Input() business: Business;
  constructor() { }

  ngOnInit(): void {
  }

}
