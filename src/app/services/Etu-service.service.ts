import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormControl,Validator, Validators} from '@angular/forms';
import { Etudiant } from '../Models/Etudiant.model';

@Injectable({
  providedIn: 'root'
})
export class Etuservice {

  constructor(private http:HttpClient) { }
    url:string="";
    Etudiants:Etudiant[];
    form:FormGroup =new FormGroup({
    cin:new FormControl('',Validators.required),
    dateNais:  new FormControl('',Validators.required),
    nom:new FormControl('',Validators.required),
    prenom:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required]),
    adresse:new FormControl('',Validators.required),
    telephone:new FormControl(0,[Validators.required,Validators.minLength(10)]),
    cne:new FormControl(0,Validators.required),
    idFiliere:new FormControl(0,Validators.required),
    motDePasse:new FormControl('',Validators.required)
  })

  getAllStudents(){
    this.http.get(this.url).toPromise().then(
      res=>{
        this.Etudiants=res as Etudiant[];
      }
    )
  }
}
