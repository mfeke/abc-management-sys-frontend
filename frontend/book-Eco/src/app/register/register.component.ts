import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

 users:any = []
  user:any = {
  // username:"",
  // pwd: "",

  }
  register(username:any,password:any,repassword:any){
    // this.user.push(username,password,repassword)
    this.user.username = username
    this.user.password = password
    this.user.repassword = repassword
   this.users.push(this.user)
   console.log(this.users)

  }
}
