import { EnsService } from './../../services/ens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-enseignant',
  templateUrl: './form-enseignant.component.html',
  styleUrls: ['./form-enseignant.component.scss']
})
export class FormEnseignantComponent implements OnInit {

  constructor(public service:EnsService) { }

  ngOnInit(): void {
    this.service.Enseignant={
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
      motDePasse:null
    };
  }
  onSubmit()
  {
    this.service.AddEns().toPromise().then(
      res=>{},
      err=>{console.log(err);}
    );
    console.log(this.service.form.value);
  }
}
