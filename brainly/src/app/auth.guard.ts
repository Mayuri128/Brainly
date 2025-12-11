import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './auth/login.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router  = inject(Router);
  const loginService = inject(LoginService);

  if(loginService.isLogIn()){
    return true
  }
  router.navigate(['/login']);
  return false;
};
