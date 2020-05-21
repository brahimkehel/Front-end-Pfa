import { FormEnseignantUpdateComponent } from './../form-enseignant-update/form-enseignant-update.component';
import { DialogConfirmServicesService } from './../../services/dialog-confirm-services.service';
import { DialogConfirmComponent } from './../dialog-confirm/dialog-confirm.component';
import { FormEnseignantComponent } from './../form-enseignant/form-enseignant.component';
import { EnsService } from './../../services/ens.service';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  searchText:string;
  number:number=1;
  columnlist:string[]=['Nom','Prenom','Email','Cin','DateNais','Adresse','Telephnoe','DateEmb','Cnss','Salaire'];
  constructor(public service:EnsService,public dialog:MatDialog,public dialogService:DialogConfirmServicesService,public notif:ToastrService ) { }
  ngOnInit(): void {
    this.service.GetAll();
      }

      onOpen(){
        this.service.onInit();
        const dialogConfig=new MatDialogConfig();
        dialogConfig.disableClose=true;
        dialogConfig.autoFocus=true;
        dialogConfig.width="50%";
        dialogConfig.height="95%";
        this.dialog.open(FormEnseignantComponent,dialogConfig);
      }
      onDelete(id)
      {
        
        this.dialogService.openConfirmDialog()
        .afterClosed().subscribe(res =>{
          if(res){
            this.service.deleteEns(id).subscribe(res=>{
              this.service.GetAll();
             this.notif.error("Supprimer","Suppression avec success");
            }),err=>{
              console.log(err);
            };
          }
        });
      }
      
    onOpenEdit(ens){
        this.service.fillForm(ens);
        const dialogConfig=new MatDialogConfig();
        dialogConfig.disableClose=true;
        dialogConfig.autoFocus=true;
        dialogConfig.width="50%";
        dialogConfig.height="95%";
        this.dialog.open(FormEnseignantUpdateComponent,dialogConfig);
        console.log(ens);
      }
}
