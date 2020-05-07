import { Etuservice } from '../../../services/Etu-service.service';
import { Component, OnInit } from '@angular/core';
import {FlxUiDataTable} from 'flx-ui-datatable';
import {TableModule} from 'primeng/table';
import { Http,Headers,Response} from '@angular/http' ;
@Component({
  selector: 'app-user-data-list',
  templateUrl: './user-data-list.component.html',
  styleUrls: ['./user-data-list.component.scss']
})
export class UserDataListComponent implements OnInit {
  constructor(public service :Etuservice) { }

  ngOnInit(): void {
    this.service.getAllStudents();
  }

}