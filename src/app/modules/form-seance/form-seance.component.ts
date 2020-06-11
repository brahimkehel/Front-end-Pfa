import { DialogConfirmServicesService } from './../../services/dialog-confirm-services.service';
import { Affectation } from './../../classes/utilisateurs/Affectation.modules';
import { ToastrService } from 'ngx-toastr';
import { SeanceAffectationService } from './../../services/seance-affectation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-seance',
  templateUrl: './form-seance.component.html',
  styleUrls: ['./form-seance.component.scss']
})
export class FormSeanceComponent implements OnInit {

  searchText: string;
  number: number = 1;
  columnlist: string[] = ['Filiere', 'Matiere', 'Enseignant', '', ''];
  columnListSeance:string[]=['Filiere','Matiere','Sujet','Date','Duree'];
  desable:boolean;

  constructor(public service: SeanceAffectationService, public notif: ToastrService,private dialogService:DialogConfirmServicesService) { }

  ngOnInit(): void {
    this.service.GetAffectation();
    this.service.onInit();
    this.service.affectation={
      idFiliere :null,
      idMatiere:null,
      idEns:null,
      libelle_Filiere:null,
      libelle_Matiere:null,
      libelle_Enseignant:null
    };
    this.desable=true;
    this.service.GetSeances();
  }
  onSubmit() {
    console.log(this.service.affectation)
    this.service.PostSeance().toPromise().then(
      res => { this.service.GetSeances();this.notif.success('Créer','Creation avec success');this.service.formSeance.reset()},
      err => { console.log(err); console.log(this.service.formSeance.value)})
  }
  Fill(aff: Affectation) {
    this.service.affectation=aff as Affectation;
    this.desable=false;
  }
  onDeleteSeance(id){
  this.dialogService.openConfirmDialog()
      .afterClosed().subscribe(res => {
        if (res) {
          this.service.deleteSeance(id).subscribe(res => {
            this.service.GetSeances();
            this.notif.error("Supprimer", "Suppression avec success");
          }), err => {
            console.log(err);
          };
        }
      });
    }
}
