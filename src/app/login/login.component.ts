import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login:any= FormGroup;
  constructor() { 
    
  }

  ngOnInit() {
    this.login = new FormGroup({
      email : new FormControl(''),
      password : new FormControl(''),
      });
  }
  onLogin(){
 
    console.log(this.login.value);
    
    }
}
