import { EnsService } from './../../services/ens.service';
import { Etuservice } from 'src/app/services/Etu-service.service';
import { FormEtudiantComponent } from './../posts/form-etudiant/form-etudiant.component';
import { MatDialogModule, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  Nbetu:Int16Array;
  Nbens:Int16Array;

  constructor(public etuserv:Etuservice,public ensserv:EnsService) {
   }

  ngOnInit(): void {
    this.NbEtd();
    this.NbEns();
  }

  NbEtd(){
    this.etuserv.NbEtudiants().subscribe(
    res=>{
      this.Nbetu=res as Int16Array;
    });
    }
  NbEns(){
      this.ensserv.NbEnseignants().subscribe(
      res=>{
        this.Nbens=res as Int16Array;
      });
}
}
