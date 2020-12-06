import { Component, OnInit } from '@angular/core';
import { HoodService } from '../hood.service'
import { Signup } from '../signup'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  register;
  hoods = [];
  name: Signup
  constructor(private hoodService: HoodService) { }

  ngOnInit(): void {
    this.register = {
      username: '',
      fname: '',
      lname: '',
      email: '',
      password: '',
      neighbourhood:''
    }
    this.hoodService.getAllHoods().subscribe((res: Response) => {

      Object.entries(res).forEach(result => {
        const [_, value] = result;
        let id = value['id']
        let name = value['hoodName']
        let nameObject = new Signup(id,name)
        this.hoods.push(nameObject)


      })
        
        // // this.register.neighbourhood.push(res)
        // let ress = this.hoods.push(res)
        // console.log(this.hoods)

      })

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
