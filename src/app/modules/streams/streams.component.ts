import { Router } from '@angular/router';
import { SeanceAffectationService } from './../../services/seance-affectation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.scss']
})
export class StreamsComponent implements OnInit {

  _date:Date=new Date();
  _date2:Date=new Date("2019-01-16");
  existence:boolean=false;
  constructor(public service:SeanceAffectationService,public router:Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("_status")=="Etudiant"){
    this.service.GetSpecificSeances(localStorage.getItem("id")).then(
      res=>{if(this.service.seances.length>0){this.existence=true;}},
      err=>{console.log(err)}
    )    
  }
    //console.log(Math.round(Math.abs((this._date.getTime()-this._date2.getTime())/(1000*60*60))));
  }
  Joindre(){
    this.router.navigateByUrl('Acceuil/chat');
  }
}
