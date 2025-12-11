import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../auth/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private loginService:LoginService,private router: Router){}

  onSubmit(){
    const success =  this.loginService.login(this.email, this.password);

    if(success){
      this.router.navigate(['/dashboard']);
    }else{
      alert('Invalid credentials');
    }
  }


}
