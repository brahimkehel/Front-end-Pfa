import { DialogConfirmServicesService } from './../../services/dialog-confirm-services.service';
import { Affectation } from './../../classes/utilisateurs/Affectation.modules';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { EnsService } from './../../services/ens.service';
import { SeanceAffectationService } from './../../services/seance-affectation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-affectation',
  templateUrl: './form-affectation.component.html',
  styleUrls: ['./form-affectation.component.scss']
})
export class FormAffectationComponent implements OnInit {

  searchText: string;
  number: number = 1;
  columnlist: string[] = ['Filiere', 'Matiere', 'Enseignant', '', ''];
  trouve: boolean;

  constructor(public service: SeanceAffectationService, public ens_service: EnsService,public dialogService:DialogConfirmServicesService, public notif: ToastrService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.service.GetFiliere();
    this.service.GetMatiere();
    this.service.GetAffectation();
    this.ens_service.GetAll();
    this.service.onInit();
    this.trouve = false;
  }

  onSubmit() {
    for (let i = 0; i < this.service.affectations.length; i++) {
      if (this.service.affectations[i].idFiliere == this.service.form.get("idFiliere").value && this.service.affectations[i].idMatiere == this.service.form.get("idMatiere").value) {
        this.trouve = true;
      }
    }
    if (this.trouve) {
      this.notif.error('Erreur', 'Cette combinaison existe dejà');
    } else {
      this.service.PostAffection().toPromise().then(
        res => {
          this.service.GetAffectation(); this.notif.success('Créer', 'Creation avec success');
        },
        err => {
          this.notif.error('Erreur', 'Cette combinaison existe dejà');
        }
      )
    }
    this.service.form.reset();
  }

  onDelete(id,id2) {
    this.dialogService.openConfirmDialog()
      .afterClosed().subscribe(res => {
        if (res) {
          this.service.Deleteaff(id,id2).subscribe(res => {
            this.service.GetAffectation();
            this.notif.error("Supprimer", "Suppression avec success");
          }), err => {
            console.log(err);
          };
        }
      });
  }
}
