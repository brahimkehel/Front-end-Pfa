import { Component, OnInit,ViewChild, HostListener } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  sideBarOpen=true;
  screenWidth:number;
  constructor() { 
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
    // set screenWidth on screen size change
    this.screenWidth = window.innerWidth;
    this.sideBarOpen=!this.sideBarOpen;
 };
  }

  ngOnInit(): void {  }

  sideBarToggler()
  {
    this.sideBarOpen=!this.sideBarOpen;
  }  
}