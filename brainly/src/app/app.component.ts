import { Component } from '@angular/core';
import { LoginService } from './auth/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'brainly';

  constructor(private loginService:LoginService){}
  isLoggedIn(){
    return this.loginService.isLogIn();
  }
}
