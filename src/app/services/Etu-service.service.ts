import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{FormGroup,FormControl, Validators} from '@angular/forms';
import { Etudiant } from '../classes/utilisateurs/Etudiant.modules';

@Injectable({
  providedIn: 'root'
})
export class Etuservice {

  constructor(private http:HttpClient) { }
    url:string="http://localhost:57759/api/etudiants";
    Etudiants:Etudiant[];
    Etudiant:Etudiant;

    form:FormGroup =new FormGroup({
    id:new FormControl(),
    cin:new FormControl('',Validators.required),
    dateNais:  new FormControl(''),
    nom:new FormControl('',Validators.required),
    prenom:new FormControl('',Validators.required),
    email:new FormControl('',[Validators.email,Validators.required]),
    adresse:new FormControl('',Validators.required),
    telephone:new FormControl(0,[Validators.required,Validators.minLength(10)]),
    cne:new FormControl(0),
    genre:new FormControl(''),
    motdePasse:new FormControl('',[Validators.required,Validators.minLength(8)]),
    filiere:new FormControl(''),
    idFiliere:new FormControl(0),
  })

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
      cne:null,
      genre:null,
      motdePasse:null,
      filiere:null,
      idFiliere:null,
    });}

  getAllStudents(){
    return this.http.get(this.url).toPromise().then(
      res=>{
        this.Etudiants=res as Etudiant[];
      }
    )
  }

  getNonAppStudents(){
    return this.http.get(this.url+"/NonApp").toPromise().then(
      res=>{
        this.Etudiants=res as Etudiant[];
      }
    )
  }

  addStudent(){
    this.http.post(this.url+"/ajouter",this.form.value);
  }
  
  NbEtudiants()
  {
    return this.http.get(this.url+"/Nb");
  }

  fillForm(etu) {
    this.form.setValue(etu);
  }

  deleteEtu(id:Int16Array)
  {
    return this.http.delete(this.url+"/"+id);
  }

  UpdateEtu(){
    console.log(this.form.get("idFiliere").value)
    return this.http.put(this.url+"/"+this.form.get("id").value,{
      id:this.form.get("id").value,
      cin:this.form.get("cin").value,
      dateNais:this.form.get("dateNais").value,
      nom:this.form.get("nom").value,
      prenom:this.form.get("prenom").value,
      genre:this.form.get("genre").value,
      email:this.form.get("email").value,
      motdePasse:this.form.get("motdePasse").value,
      adresse:this.form.get("adresse").value,
      telephone:this.form.get("telephone").value,
      cne:this.form.get("cne").value,
      idFiliere:this.form.get("idFiliere").value
    });
  }
}
