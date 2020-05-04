import { Router } from '@angular/router';
import { UtilisateursModule } from './../classes/utilisateurs/utilisateurs.module';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  
  constructor(public authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.authservice.utilisateur={
      id:null,
      nom:null,
      prenom:null,
      email:null,
      motdepasse:null,
      _status:null
    };
    if(localStorage.getItem('email')!=null){
      this.router.navigateByUrl('Acceuil');
    }
  }
  onSubmit(){
    this.authservice.login().subscribe(
      (res:UtilisateursModule)=>{
        localStorage.setItem('email',res.email);
        localStorage.setItem('nom',res.nom);
        localStorage.setItem('prenom',res.prenom);
        localStorage.setItem('_status',res._status);
        localStorage.setItem('id',res.id);
        this.router.navigateByUrl('Acceuil');
      },
      err=>{
        if(err.status==400)
        {
          console.log("Email ou MotdePasse est incorrect");
        }
        else
        {
          console.log(err  );
        }
      }
    );
  }
}
