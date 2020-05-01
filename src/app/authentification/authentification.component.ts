import { UtilisateursModule } from './../classes/utilisateurs/utilisateurs.module';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  formModel={
    email:'',
    motdepasse:''
  }
  constructor(public authservice:AuthService) { }

  ngOnInit(): void {
    this.authservice.utilisateur={
      id:0,
      email:'utilisateur1@gmail.com',
      motdepasse:'123'
    }
  }
  Secon(){
    if(this.authservice.utilisateur.email!='')
    {
      this.authservice.getUtilisateur();
    }
    
  }
}
