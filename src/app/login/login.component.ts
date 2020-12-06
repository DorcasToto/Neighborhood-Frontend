import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HoodService } from '../hood.service'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  input;

  constructor(private hoodService: HoodService,private rouuter:Router) { }

  ngOnInit(): void {
    this.input = {
      username: '',
      password: '',
    }
  }

  // onRegister() {
  //   this.hoodService.registerUser(this.input).subscribe(res:Response  => {
  //     alert('user' + this.input.username + 'created')
  //   }, error => {
  //     console.log('error')
  //   });
  // }
  // onRegister() {
  //   this.hoodService.registerUser(this.input).subscribe((res: Response) => {
  //     alert('user' + this.input.username + 'created')
  //     console.log(res)
  //   }, error => {
  //     console.log('error')
  //   })
  // }
  onLogin() {
    this.hoodService.loginUser(this.input).subscribe((res: Response) => {
      localStorage.setItem('accessToken', res['access'])
      this.rouuter.navigate(['/allposts'])
      // console.log(res['access'])
    }, error => {
      console.log('error')
    })
  }
}
