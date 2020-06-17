import { SeanceAffectationService } from './../../services/seance-affectation.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Etuservice } from 'src/app/services/Etu-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.scss']
})
export class FirstPageComponent implements OnInit {
  hide:boolean=true;
  show:boolean=true;
  disableButton:boolean=false;
  constructor(private _config:NgbCarouselConfig,public service: Etuservice,private router:Router,public serviceFiliere:SeanceAffectationService,private notif:ToastrService) {
    _config.interval = 3000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;
  }

  images:any[]=[
    {
    img:'/assets/Images/Carousel6.png',},
    {
    img:'/assets/Images/Carousel7.jpeg',},
    {
    img:'/assets/Images/Carousel9.jpeg'},
    {
    img:'/assets/Images/Carousel10.jpeg'},
    {
      img:'/assets/Images/Carousel11.jpeg'},
      {
        img:'/assets/Images/Carousel12.jpeg'}
    
  ];
login(){
  this.router.navigate(['/Authentification']);
}
  ngOnInit(): void {
    this.serviceFiliere.GetFiliere();
  }
  submit(){
    this.service.addStudent();
  }
  display(){
    this.show=false;
    this.disableButton=true;
  }
  close(){
    this.show=true;
    this.disableButton=false;
    this.service.onInit();
  }
}
