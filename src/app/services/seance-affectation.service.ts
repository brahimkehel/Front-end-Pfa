import { Matiere } from './../classes/utilisateurs/Matiere.modules';
import { Filiere } from './../classes/Filiere.modules';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class SeanceAffectationService {

  url:string='http://localhost:57759/api/';
  filieres:Filiere[];
  matieres:Matiere[];

  constructor(private http:HttpClient) { }

  form:FormGroup =new FormGroup({
    idFiliere:new FormControl(),
    idMatiere:new FormControl(),
    idEns:  new FormControl()
  });

  GetFiliere(){
    return this.http.get(this.url+"Filieres").toPromise().then(
      res=>{
        this.filieres=res as Filiere[];
      })
  }

  GetMatiere(){
    return this.http.get(this.url+"Matieres").toPromise().then(
      res=>{
        this.matieres=res as Matiere[];
      })
  }
}
