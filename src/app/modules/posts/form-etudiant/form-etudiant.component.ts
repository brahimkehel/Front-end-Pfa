import { SeanceAffectationService } from './../../../services/seance-affectation.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
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
 hide:boolean=true;
  constructor(public service: Etuservice,public dialog:MatDialog,public notif:ToastrService) { }

  ngOnInit(): void {
    this.service.getAllStudents();
  }
  onSubmit() {
    this.service.UpdateEtu().toPromise().then(
      res => { this.service.getAllStudents();this.notif.success('Modifer','Modifer avec success');},
      err => { console.log(err); }
    );
    this.dialog.closeAll();
  }
  onClear() {
    this.service.form.reset();
  }
  close(){
    this.dialog.closeAll();
  }
}
