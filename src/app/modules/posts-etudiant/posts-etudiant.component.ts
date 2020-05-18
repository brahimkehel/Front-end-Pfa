import { DialogConfirmServicesService } from './../../services/dialog-confirm-services.service';
import { FormEtudiantComponent } from './../posts/form-etudiant/form-etudiant.component';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Etuservice } from 'src/app/services/Etu-service.service';

@Component({
  selector: 'app-posts-etudiant',
  templateUrl: './posts-etudiant.component.html',
  styleUrls: ['./posts-etudiant.component.scss']
})
export class PostsEtudiantComponent implements OnInit {

  searchText: string;
  number: number = 1;
  columnlist: string[] = ['Nom', 'Prenom', 'Email', 'Cin', 'DateNais', 'Adresse', 'Telephnoe', 'CNE', 'Genre'];
  constructor(public service: Etuservice,public dialog:MatDialog,public dialogService:DialogConfirmServicesService,public notif:ToastrService) { }

  ngOnInit(): void {
    this.service.getAllStudents();
  }

  onDelete(id) {

    this.dialogService.openConfirmDialog()
      .afterClosed().subscribe(res => {
        if (res) {
          this.service.deleteEtu(id).subscribe(res => {
            this.service.getAllStudents();
            this.notif.error("Supprimer", "Suppression avec success");
          }), err => {
            console.log(err);
          };
        }
      });

  }
  onOpenEdit(etu) {
    console.log(this.service.form.value);
    this.service.fillForm(etu);
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    dialogConfig.height = "95%";
    this.dialog.open(FormEtudiantComponent, dialogConfig);
    console.log(etu);
  }
}
