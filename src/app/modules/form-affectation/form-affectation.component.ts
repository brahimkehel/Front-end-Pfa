import { ToastrService } from 'ngx-toastr';
import { EnsService } from './../../services/ens.service';
import { SeanceAffectationService } from './../../services/seance-affectation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-affectation',
  templateUrl: './form-affectation.component.html',
  styleUrls: ['./form-affectation.component.scss']
})
export class FormAffectationComponent implements OnInit {

  searchText:string;
  number:number=1;
  columnlist:string[]=['Filiere','Matiere','Enseignant','',''];

  constructor(public service:SeanceAffectationService,public ens_service:EnsService,public notif:ToastrService) { }

  ngOnInit(): void {
    this.service.GetFiliere();
    this.service.GetMatiere();
    this.service.GetAffectation();
    this.ens_service.GetAll();
    this.service.onInit();
  }

  onSubmit(){
    this.service.PostAffection().toPromise().then(
      res => { this.service.GetAffectation();this.notif.success('Créer','Creation avec success');},
      err => { console.log(err); console.log(this.service.form.value)}
  )
}
}
