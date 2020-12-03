import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoodService {

  constructor(
    public hoodName:string,
    public photo:string,
    public hoodLocation:string,
    public occupantCount:string,
    public admin:number
  ) { }
}
