import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() _toggleSideBar: EventEmitter<any> = new EventEmitter();

  _date2:Date=new Date();

  constructor(private router: Router) { }

  ngOnInit(): void { }

  toggleSideBar() {
    this._toggleSideBar.emit();
  }

  onLogOut() {
    localStorage.removeItem('email');
    localStorage.removeItem('nom');
    localStorage.removeItem('prenom');
    localStorage.removeItem('_status');
    localStorage.removeItem('id');
    console.log((Math.abs((this._date2.getTime()-parseInt(localStorage.getItem('starting_date')))/(1000*60))).toFixed(2));
    localStorage.removeItem('starting_date');
    this.router.navigate(['Authentification']);
  }
  home(){
    this.router.navigateByUrl('Acceuil')
  }
}
