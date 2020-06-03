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
  constructor(public service:SeanceAffectationService,public router:Router) { }

  ngOnInit(): void {
    this.service.GetSeances();
    console.log(Math.round(Math.abs((this._date.getTime()-this._date2.getTime())/(1000*60*60))));
  }
  Joindre(){
    this.router.navigateByUrl('Acceuil/chat');
  }
}
