import { Router } from '@angular/router';
import { UtilisateursModule } from './../classes/utilisateurs/utilisateurs.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  utilisateur:UtilisateursModule;
  url:string='http://localhost:54312/api/utilisateurs';
  constructor(private http:HttpClient,private router:Router) { }

  getUtilisateur(){
    return this.http.get(this.url+"/"+this.utilisateur.email+"&"+this.utilisateur.motdepasse).toPromise().then(
      res=>{
        this.router.navigate(['/posts']);
      }
    )
}
}