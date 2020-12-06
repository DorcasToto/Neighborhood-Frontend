import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hoodclass } from './hoodclass'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'
import { Viewhoodclass } from './viewhoodclass';

@Injectable({
  providedIn: 'root'
})
export class HoodService {

  hood: Hoodclass

  constructor(private http: HttpClient) { }

  getHoodList(accessToken): Observable<any> {
    interface ApiResponse {
      hoodName: string
      photo: string
      hoodLocation: string
      occupantCount: string
    }

    return this.http.get<ApiResponse>(environment.hoodEndpoint, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + accessToken
      }
    });

  }
  getAllHoods(): Observable<any> {
    interface allhoodsResponse {
      id:number
      name: string
    }
    return this.http.get<allhoodsResponse>(environment.hoodEndpoint);

  }
  gethoodInfo(): Observable<any> {
    interface viewHoodResponse {
      hoodName: string
      businessName: string
      hoodLocation: string
      businessEmail: string
      admin: string
      photo: string
    }
    return this.http.get<viewHoodResponse>(environment.hoodEndpoint);
  }

  getallPosts(): Observable<any> {
    interface viewallPosts {
      title: string
      text: string
      user: string
      photo: string
      date: string
    }
    return this.http.get<viewallPosts>(environment.allposts);
  }


  loginUser(userdata): Observable<any> {
    // interface loginResponse {
    //   username: string
    //   password: string 

    // }
    return this.http.post(environment.loginEndpoint, userdata)
  }
  registerUser(userdata): Observable<any> {

    return this.http.post(environment.signupEndpoint, userdata)

  }
  newPost(userdata):Observable<any>{
    return this.http.post(environment.newPost,userdata)
  }


}

