import { EnseignantsModule } from './../classes/utilisateurs/Enseignants.modules';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';
import { DatePipe } from '@angular/common';

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
  returndate():AbstractControl
  {
    return this.form.get("dateNais").value;
  }
  AddEns()
  {
    return this.http.post(this.url+"/Enseignants/Ajouter",{
      cin:this.form.get("cin").value,
      dateNais:this.returndate(),
      nom:this.form.get("nom").value,
      prenom:this.form.get("prenom").value,
      email:this.form.get("email").value,
      adresse:this.form.get("adresse").value,
      telephone:this.form.get("telephone").value,
      dateEmb:this.returndate(),
      cnss:this.form.get("cnss").value,
      salaire:this.form.get("salaire").value,
      genre:this.form.get("genre").value,
      motDePasse:this.form.get("motDePasse").value
    });
  }

}
