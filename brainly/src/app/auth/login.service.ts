import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

 login(email: string, password: string) {
   const token = 'FAKE_JWT_TOKEN_12345';
  if(email.trim() !=='' && password.trim() !==''){
    localStorage.setItem('token', token);
    return true;
  }
  return false;
 }

 isLogIn() {
  return !!localStorage.getItem('token')
 }

 logOut(){
  localStorage.removeItem('token');
 }
}
