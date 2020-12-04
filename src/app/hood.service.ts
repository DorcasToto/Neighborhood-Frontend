import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hoodclass} from './hoodclass'
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HoodService {
  hood:Hoodclass


  constructor(private http:HttpClient) { }


  getHoodList():Observable<any>{
    interface ApiResponse{
      hoodName:string
      photo:string
      hoodLocation:string
      occupantCount:string
      admin:string
    }
    return this.http.get<ApiResponse>(environment.hoodEndpoint);
  }
}
