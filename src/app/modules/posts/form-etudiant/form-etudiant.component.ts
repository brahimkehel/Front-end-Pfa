import { Component, OnInit } from '@angular/core';
import { Etuservice } from 'src/app/services/Etu-service.service';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
@Component({
  selector: 'app-form-etudiant',
  templateUrl: './form-etudiant.component.html',
  styleUrls: ['./form-etudiant.component.scss']
})
export class FormEtudiantComponent implements OnInit {

  constructor(public service:Etuservice) { }

  ngOnInit(): void {
  }

}
