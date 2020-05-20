import { EnsService } from './../../services/ens.service';
import { SeanceAffectationService } from './../../services/seance-affectation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-affectation',
  templateUrl: './form-affectation.component.html',
  styleUrls: ['./form-affectation.component.scss']
})
export class FormAffectationComponent implements OnInit {

  constructor(public service:SeanceAffectationService,public ens_service:EnsService) { }

  ngOnInit(): void {
    this.service.GetFiliere();
    this.service.GetMatiere();
    this.ens_service.GetAll();
  }

}
