import { Component, OnInit } from '@angular/core';
import { HoodService } from '../hood.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  register;
  constructor(private hoodService: HoodService) { }

  ngOnInit(): void {
    this.register = {
      username:'',
      fname: '',
      lname: '',
      email: '',
      password: '',
      neighbourhood:''
    }

  }

  onRegister() {
    this.hoodService.registerUser(this.register).subscribe((res: Response) => {
      alert('user' + this.register.username + 'created')
      console.log(res)
    }, error => {
      console.log('error')
    })
  }

}
