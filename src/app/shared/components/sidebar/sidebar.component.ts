import { UtilisateursModule } from './../../../classes/utilisateurs/utilisateurs.module';
import { AuthService } from './../../../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

   userd:UtilisateursModule;
   status:boolean;
  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.userd={
    id:localStorage.getItem('id'),
    email:localStorage.getItem('email'),
    nom:localStorage.getItem('nom'),
    prenom:localStorage.getItem('prenom'),
    status:localStorage.getItem('_status'),
    motdepasse:null
  }
  if(this.userd.status =='Administrateur')
  this.status=true;
  else
  this.status=false;
  }

}
