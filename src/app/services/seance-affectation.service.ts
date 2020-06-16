import { Seance } from './../classes/utilisateurs/Seance.modules';
import { Affectation } from './../classes/utilisateurs/Affectation.modules';
import { Matiere } from './../classes/utilisateurs/Matiere.modules';
import { Filiere } from '../classes/utilisateurs/Filiere.modules';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeanceAffectationService {

  url: string = 'http://localhost:57759/api/';
  filieres: Filiere[];
  matieres: Matiere[];
  affectations: Affectation[];
  seances: Seance[];
  affectation:Affectation;

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    idFiliere: new FormControl(''),
    idMatiere: new FormControl(''),
    idEns: new FormControl('')
  });
  formSeance: FormGroup = new FormGroup({
    idFiliere: new FormControl(''),
    idMatiere: new FormControl(''),
    duree: new FormControl(''),
    date:new FormControl('')
  });

  onInit() {
    this.form.setValue({
      idFiliere: null,
      idMatiere: null,
      idEns: null
    });
    this.formSeance.setValue({
      idFiliere: null,
      idMatiere: null,
      duree: null,
      date:null
    })
  }

  GetFiliere() {
    return this.http.get(this.url + "Filieres").toPromise().then(
      res => {
        this.filieres = res as Filiere[];
      })
  }

  GetMatiere() {
    return this.http.get(this.url + "Matieres").toPromise().then(
      res => {
        this.matieres = res as Matiere[];
      })
  }
  GetAffectation() {
    return this.http.get(this.url + "Affectations").toPromise().then(
      res => {
        this.affectations = res as Affectation[];
      })
  }
  PostAffection() {
    return this.http.post(this.url + "affectations", {
      idFiliere: parseInt(this.form.get("idFiliere").value),
      idMatiere: parseInt(this.form.get("idMatiere").value),
      idEns: parseInt(this.form.get("idEns").value)
    });
  }
  GetSeances() {
    return this.http.get(this.url + "Seances/GetAllSeances").toPromise().then(
      res => {
        this.seances = res as Seance[];
      })
  }
  GetSpecificSeances(id:any) {
    return this.http.get(this.url + "Seances/GetSpecificSeances/"+id).toPromise().then(
      res => {
        this.seances = res as Seance[];
      })
  }
  PostSeance(){
    return this.http.post(this.url + "Seances", {
      idFiliere: this.affectation.idFiliere,
      idMatiere: this.affectation.idMatiere,
      duree: parseInt(this.formSeance.get("duree").value),
      date:this.formSeance.get("date").value
    });
  }

  Deleteaff(id,id2){
    return this.http.delete(this.url+"Affectations/"+id+"/"+id2)
  }
  deleteSeance(id){
    return this.http.delete(this.url + "Seances/"+id)
  }
}
