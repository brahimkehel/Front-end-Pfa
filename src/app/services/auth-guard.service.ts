import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private authservice:AuthService,private router:Router) { }
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ):boolean{
    if(localStorage.getItem('email')!=null){
      return true;
    }else{
      this.router.navigate(['Authentification']);
      return false;
    }
  }
  
}
