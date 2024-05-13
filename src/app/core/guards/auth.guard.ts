import { CanActivateFn ,Router } from '@angular/router';
import { inject } from '@angular/core';
import { HttpService } from '../services/http.service';



export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(HttpService);
  const isAuthenticated = authService.getToken();
  const router = inject(Router);

  if (isAuthenticated == null) {
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
