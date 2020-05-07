import { UserDataComponent } from './../user-data/user-data.component';
import { Etuservice } from '../../../services/Etu-service.service';
import { Component, OnInit } from '@angular/core';
import {FlxUiDataTable} from 'flx-ui-datatable';
import {TableModule} from 'primeng/table';
import { Http,Headers,Response} from '@angular/http' ;
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-user-data-list',
  templateUrl: './user-data-list.component.html',
  styleUrls: ['./user-data-list.component.scss']
})
export class UserDataListComponent implements OnInit {
  constructor(public service :Etuservice,public dialog:MatDialog) { }
  ngOnInit(): void {
    this.service.getAllStudents();
  }
  onOpen(){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose=true;
    dialogConfig.autoFocus=true;
    dialogConfig.width="60%";
    this.dialog.open(UserDataComponent);
  }
}