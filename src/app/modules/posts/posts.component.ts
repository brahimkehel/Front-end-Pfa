import { EnsService } from './../../services/ens.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  list:MatTableDataSource<any>;
  columnlist:string[]=['id','nom','prenom','email','Cin','DateNais','Adresse','Telephnoe','DateEmb','Cnss','Salaire','MotdePasse'];
  constructor(private service:EnsService) { }

  ngOnInit(): void {
    this.service.GetAll();
    this.list=new MatTableDataSource(this.service.Enseignants);
      }
}
