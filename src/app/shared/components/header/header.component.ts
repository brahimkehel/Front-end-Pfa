import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() _toggleSideBar: EventEmitter<any> = new EventEmitter();

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
    this.router.navigate(['Authentification']);
  }
}
