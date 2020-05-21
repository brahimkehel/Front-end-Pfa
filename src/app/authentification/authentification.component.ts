import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UtilisateursModule } from './../classes/utilisateurs/utilisateurs.module';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { FormEtudiantComponent } from '../modules/posts/form-etudiant/form-etudiant.component';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {
  
  constructor(public authservice:AuthService,private router:Router,public dialog:MatDialog,public notif:ToastrService) { }
  setVisible=true;
  valeur:string="Login";
  valeurlien="Don't have an account? Register Here"
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
    this.authservice.login().toPromise().then(
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
          this.notif.error('Erreur de saisie','Email ou Mot de passe est incorrect');
        }
      }
    );
  }
  onOpen(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(FormEtudiantComponent,dialogConfig);
  }
}
