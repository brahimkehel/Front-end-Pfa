import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormControl, Validators} from '@angular/forms';
import { Etudiant } from '../classes/utilisateurs/Etudiant.modules';

@Injectable({
  providedIn: 'root'
})
export class Etuservice {

  constructor(private http:HttpClient) { }
    url:string="http://localhost:54370/api/Etudiants";
    Etudiants:Etudiant[];
    Etudiant:Etudiant;
    form:FormGroup =new FormGroup({
    cin:new FormControl('',Validators.required),
    dateNais:  new FormControl(''),
    nom:new FormControl('',Validators.required),
    prenom:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required]),
    adresse:new FormControl('',Validators.required),
    telephone:new FormControl(0,[Validators.required,Validators.minLength(10)]),
    cne:new FormControl(0),
    idFiliere:new FormControl(0),
    motDePasse:new FormControl('',[Validators.required,Validators.minLength(8)])
  })

  getAllStudents(){
    this.http.get(this.url).toPromise().then(
      res=>{
        this.Etudiants=res as Etudiant[];
      }
    )
  }
  addStudent(){
    this.http.post(this.url,this.Etudiant);
  }
}
