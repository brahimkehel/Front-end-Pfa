import { DialogConfirmComponent } from './../dialog-confirm/dialog-confirm.component';
import { FormEnseignantComponent } from './../form-enseignant/form-enseignant.component';
import { EnsService } from './../../services/ens.service';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  searchText:string;
  number:number=1;
  columnlist:string[]=['Nom','Prenom','Email','Cin','DateNais','Adresse','Telephnoe','DateEmb','Cnss','Salaire'];
  constructor(public service:EnsService,public dialog:MatDialog,private popup:Popup) { }
  popoverTitle:string="Supprimer Cet enseignant "
  popoverMessage:string="Vous êtes sûr de vouloir supprimer cet enseignant ?"
  confirmClicked=false;
  cancelClicked=false;
  ngOnInit(): void {
    this.service.GetAll();
      }
      onOpen(){
        const dialogConfig=new MatDialogConfig();
        dialogConfig.disableClose=true;
        dialogConfig.autoFocus=true;
        dialogConfig.width="50%";
        dialogConfig.height="95%";
        this.dialog.open(FormEnseignantComponent,dialogConfig);
      }
      onDelete(id)
      {
        this.service.deleteEns(id).subscribe(res=>{
          this.service.GetAll();
        }),(err:any)=>{
          console.log(err);
        };
      }
      onDeleteClick(){
        this.popup.options = {
          header: "Supprimer ",
          color: "#5cb85c", // red, blue....
          widthProsentage: 40, // The with of the popou measured by browser width
          animationDuration: 1, // in seconds, 0 = no animation
          showButtons: true, // You can hide this in case you want to use custom buttons
          confirmBtnContent: "OK", // The text on your confirm button
          cancleBtnContent: "Cancel", // the text on your cancel button
          confirmBtnClass: "btn btn-danger", // your class for styling the confirm button
          cancleBtnClass: "btn btn-info", // you class for styling the cancel button
          animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown'
      };
       
        this.popup.show(this.popup.options);
      }
      onCancel(){
        this.popup.hide();
      }
  
}
