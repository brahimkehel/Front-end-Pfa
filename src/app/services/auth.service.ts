import { Router } from '@angular/router';
import { UtilisateursModule } from './../classes/utilisateurs/utilisateurs.module';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  utilisateur:UtilisateursModule;
  url:string='http://localhost:54370/api';
  
  constructor(private http:HttpClient,private router:Router) { }

  login(){
    return this.http.post(this.url+"/Utilisateurs/Login",this.utilisateur);
  }

}