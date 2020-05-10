
import { MaterialModule } from './../../material/material.module';
import { EnsService } from './../../services/ens.service';
import { NgModule } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialogModule, MatDialogConfig, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  searchText:string;
  number:number=1;
  columnlist:string[]=['Nom','Prenom','Email','Cin','DateNais','Adresse','Telephnoe','DateEmb','Cnss','Salaire'];
  constructor(public service:EnsService,public dialog:MatDialog) { }

  ngOnInit(): void {
    this.service.GetAll();
      }
      onOpen(){
        const dialogConfig=new MatDialogConfig();
        dialogConfig.disableClose=true;
        dialogConfig.autoFocus=true;
        dialogConfig.width="60%";
        this.dialog.open(FormEtudiantComponent,dialogConfig);
      }
}
