import { EnseignantsModule } from './../classes/utilisateurs/Enseignants.modules';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EnsService {

  Enseignants:EnseignantsModule[];
  Enseignant:EnseignantsModule;
  url:string='http://localhost:54575/api';
  constructor(private http:HttpClient,private router:Router) { }
  form:FormGroup =new FormGroup({
    id:new FormControl(),
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
    motdePasse:new FormControl('',[Validators.required,Validators.minLength(8)]),
    matiere:new FormControl(),
    seance:new FormControl()
  });
  onInit(){
    this.form.setValue({
      id:0,
      cin:null,
      dateNais:null,
      nom:null,
      prenom:null,
      email:null,
      adresse:null,
      telephone:null,
      dateEmb:null,
      cnss:null,
      salaire:null,
      genre:null,
      motdePasse:null,
      matiere:null,
      seance:null
    });
  }
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
    console.log(this.form.value);
    return this.http.post(this.url+"/Enseignants/Ajouter",this.form.value);
  }
  fillForm(ens) {
    this.form.setValue(ens);
  }
 
  deleteEns(id:Int16Array)
  {
    return this.http.delete(this.url+"/Enseignants/"+id);
  }
  UpdateEns(){
    return this.http.put(this.url+"/Enseignants/"+this.form.get("id").value,this.form.value);
  }
  NbEnseignants(){
    return this.http.get(this.url+"/Enseignants/Nb");
  }

}
