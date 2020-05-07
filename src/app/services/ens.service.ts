import { EnseignantsModule } from './../classes/utilisateurs/Enseignants.modules';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnsService {

  Enseignants:EnseignantsModule[];
  url:string='http://localhost:54370/api';
  constructor(private http:HttpClient,private router:Router) { }

  GetAll()
  {
    return this.http.get(this.url+"/Enseignants").toPromise().then(
      res=>{
        this.Enseignants=res as EnseignantsModule[];
      } 
    );
  }

}
