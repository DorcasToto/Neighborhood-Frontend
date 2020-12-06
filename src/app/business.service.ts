import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Business } from './business';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  
  constructor(private http: HttpClient) { }

  getBusinessList(): Observable<any> {
    interface ApiResponse {
      name: string
      description: string
      user: string
      email: string
    }
    return this.http.get<ApiResponse>(environment.businessEndpoint);

  }
}