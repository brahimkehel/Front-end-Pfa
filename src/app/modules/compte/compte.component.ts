import { Administrateur } from './../../classes/utilisateurs/Administrateur.modules';
import { EnseignantsModule } from './../../classes/utilisateurs/Enseignants.modules';
import { Etudiant } from './../../classes/utilisateurs/Etudiant.modules';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators, ValidatorFn, ValidationErrors, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-compte',
  templateUrl: './compte.component.html',
  styleUrls: ['./compte.component.scss']
})
export class CompteComponent implements OnInit {

  formGroup: FormGroup;
  hide: boolean = true;
  hide2: boolean = true;
  etudiant: Etudiant;
  enseignant: EnseignantsModule;
  admin: Administrateur;
  form2: FormGroup = new FormGroup({
    nom: new FormControl('', [Validators.required, Validators.minLength(4)]),
    prenom: new FormControl('', [Validators.required, Validators.minLength(4)]),
    adresse: new FormControl('', [Validators.required, Validators.minLength(4)]),
    telephone: new FormControl('', [Validators.required, Validators.minLength(10)])
  });
  constructor(private formBuilder: FormBuilder, private http: HttpClient,public notif:ToastrService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required]]
    }, { validator:passwordMatchValidator });

    switch (localStorage.getItem("_status")) {
      case "Etudiant": {
        this.http.get("http://localhost:57759/api/etudiants/" + localStorage.getItem("id")).toPromise().then(
          res => {
            this.etudiant = res as Etudiant;
            this.form2.setValue({
              nom: this.etudiant.nom,
              prenom: this.etudiant.prenom,
              adresse: this.etudiant.adresse,
              telephone: this.etudiant.telephone
            })
          }, err => { console.log(err) }); break;
      }
      case "Enseignant": {
        this.http.get("http://localhost:57759/api/enseignants/" + localStorage.getItem("id")).toPromise().then(
          res => {
            this.enseignant = res as EnseignantsModule;
            this.form2.setValue({
              nom: this.enseignant.nom,
              prenom: this.enseignant.prenom,
              adresse: this.enseignant.adresse,
              telephone: this.enseignant.telephone
            })
          }, err => { console.log(err) }); break;
      }
      case "Administrateur": {
        this.http.get("http://localhost:57759/api/administrateurs/" + localStorage.getItem("id")).toPromise().then(
          res => {
            this.admin = res as Administrateur;
            this.form2.setValue({
              nom: this.admin.nom,
              prenom: this.admin.prenom,
              adresse: this.admin.adresse,
              telephone: this.admin.telephone
            })
          }, err => { console.log(err) }); break;
      }
      default: {
        break;
      }
    }
  }

  /* Shorthands for form controls (used from within template) */
  get password() { return this.formGroup.get('password'); }
  get password2() { return this.formGroup.get('password2'); }

  /* Called on each input in either password field */
  onPasswordInput() {
    if (this.formGroup.hasError('passwordMismatch'))
      this.password2.setErrors([{ 'passwordMismatch': true }]);
    else
      this.password2.setErrors(null);
  }
  Enregistrer() {
    switch (localStorage.getItem("_status")) {
      case "Etudiant": {
        this.http.patch("http://localhost:57759/api/etudiants/" + localStorage.getItem("id"),[{
          "op": "replace",
          "path": "/motdePasse",
          "value": this.formGroup.get("password").value
        }]).toPromise().then(
          res=>{console.log("khdamaa")
          this.notif.success('Ajouter','Mot de passe modifié avec success');},
          err=>{console.log(err)}
        );break;        
      }
      case "Enseignant": {
        this.http.patch("http://localhost:57759/api/enseignants/" + localStorage.getItem("id"),[{
          "op": "replace",
          "path": "/motdePasse",
          "value": this.formGroup.get("password").value
        }]).toPromise().then(
          res=>{console.log("khdamaa")
          this.notif.success('Ajouter','Mot de passe modifié avec success');},
          err=>{console.log(err)}
        );break;
      }
      case "Administrateur": {
        this.http.patch("http://localhost:57759/api/administrateurs/" + localStorage.getItem("id"),[{
          "op": "replace",
          "path": "/motdePasse",
          "value": this.formGroup.get("password").value
        }]).toPromise().then(
          res=>{console.log("khdamaa")
          this.notif.success('Ajouter','Mot de passe modifié avec success');},
          err=>{console.log(err)}
        );break;   
      }
      default: {
        break;
      }
    }
  }
  Enregistrer2() {
    switch (localStorage.getItem("_status")) {
      case "Etudiant": {
        this.http.patch("http://localhost:57759/api/etudiants/" + localStorage.getItem("id"),[{
          "op": "replace",
          "path": "/nom",
          "value": this.form2.get("nom").value},
          {
          "op": "replace",
          "path": "/prenom",
          "value": this.form2.get("prenom").value},
          {
          "op": "replace",
          "path": "/adresse",
          "value": this.form2.get("adresse").value},
          {
          "op": "replace",
          "path": "/telephone",
          "value": this.form2.get("telephone").value}
        ]).subscribe(
          res=>{console.log("khdamaa")
          localStorage.setItem("nom",this.form2.get("nom").value);
          localStorage.setItem("prenom",this.form2.get("prenom").value);
          window.location.reload();
          this.notif.success('Ajouter','Modifié avec success');
        },
          err=>{console.log(err)}
        );break;        
      }
      case "Enseignant": {
        this.http.patch("http://localhost:57759/api/enseignants/" + localStorage.getItem("id"),[{
          "op": "replace",
          "path": "/nom",
          "value": this.form2.get("nom").value},
          {
          "op": "replace",
          "path": "/prenom",
          "value": this.form2.get("prenom").value},
          {
          "op": "replace",
          "path": "/adresse",
          "value": this.form2.get("adresse").value},
          {
          "op": "replace",
          "path": "/telephone",
          "value": this.form2.get("telephone").value}
        ]).toPromise().then(
          res=>{console.log("khdamaa")
          localStorage.setItem("nom",this.form2.get("nom").value);
          localStorage.setItem("prenom",this.form2.get("prenom").value);
          window.location.reload();
          this.notif.success('Ajouter','Modifié avec success');},
          err=>{console.log(err)}
        );break;
      }
      case "Administrateur": {
        this.http.patch("http://localhost:57759/api/administrateurs/" + localStorage.getItem("id"),[{
          "op": "replace",
          "path": "/nom",
          "value": this.form2.get("nom").value},
          {
          "op": "replace",
          "path": "/prenom",
          "value": this.form2.get("prenom").value},
          {
          "op": "replace",
          "path": "/adresse",
          "value": this.form2.get("adresse").value},
          {
          "op": "replace",
          "path": "/telephone",
          "value": this.form2.get("telephone").value}
        ]).toPromise().then(
          res=>{console.log("khdamaa");
          localStorage.setItem("nom",this.form2.get("nom").value);
          localStorage.setItem("prenom",this.form2.get("prenom").value);
          window.location.reload();
          this.notif.success('Ajouter','Modifié avec success');},
          err=>{console.log(err)}
        );break;   
      }
      default: {
        break;
      }
    }
}
}

export const passwordMatchValidator: ValidatorFn = (formGroup: FormGroup): ValidationErrors | null => {
  if (formGroup.get('password').value === formGroup.get('password2').value)
    return null;
  else
    return { passwordMismatch: true };
};
