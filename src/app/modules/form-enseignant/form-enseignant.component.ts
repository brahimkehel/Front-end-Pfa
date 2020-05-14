import { EnsService } from './../../services/ens.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-form-enseignant',
  templateUrl: './form-enseignant.component.html',
  styleUrls: ['./form-enseignant.component.scss']
})
export class FormEnseignantComponent implements OnInit {

  constructor(public service:EnsService,public dialog:MatDialog) { }

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
      motdePasse:null,
      matiere:null,
      seance:null
    };
  }
  onSubmit()
  {
    this.service.AddEns().toPromise().then(
      res=>{this.service.GetAll();},
      err=>{console.log(err);}
    );
   this.dialog.closeAll();
  }
  onClear(){
    this.service.form.reset();
  }
  close(){
    this.service.form.reset();
    this.dialog.closeAll();
  }
}
