import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor(private router:Router) { }
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):boolean{
    if(localStorage.getItem('_status')=='Administrateur'){
      return true;
    }else{
      this.router.navigate(['Acceuil']);
      return false;
    }
  }
  
}
