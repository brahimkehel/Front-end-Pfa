import { EnseignantsModule } from './../classes/utilisateurs/Enseignants.modules';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class EnsService {

  Enseignants:EnseignantsModule[];
  Enseignant:EnseignantsModule;
  url:string='http://localhost:54575/api';
  constructor(private http:HttpClient,private router:Router) { }
  form:FormGroup =new FormGroup({
    cin:new FormControl('',Validators.required),
    dateNais:  new FormControl(''),
    nom:new FormControl('',Validators.required),
    prenom:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required]),
    adresse:new FormControl('',Validators.required),
    telephone:new FormControl('',[Validators.required,Validators.minLength(10)]),
    dateEmb:new FormControl(''),
    genre:new FormControl(''),
    cnss:new FormControl(''),
    salaire:new FormControl(0,[Validators.required,Validators.minLength(4)]),
    motDePasse:new FormControl('',[Validators.required,Validators.minLength(8)]),
  });

  GetAll()
  {
    return this.http.get(this.url+"/Enseignants").toPromise().then(
      res=>{
        this.Enseignants=res as EnseignantsModule[];
      } 
    );
  }
  
  AddEns()
  {
    return this.http.post(this.url+"/Enseignants/Ajouter",this.form.value);
  }
  deleteEns(id)
  {
    return this.http.delete(this.url+"/Enseignants/"+id);
  }

}
