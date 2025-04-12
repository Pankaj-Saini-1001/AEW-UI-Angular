import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const jwtToken = localStorage.getItem('jwtToken');

  const router = inject(Router)

  if(jwtToken){
    return true;
  }

  else{
    alert("You have to LOGIN first")
    router.navigate(['/login']);
    return false;
  }


  
};
