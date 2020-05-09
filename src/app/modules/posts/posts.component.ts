import { EnsService } from './../../services/ens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  columnlist:string[]=['Nom','Prenom','Email','Cin','DateNais','Adresse','Telephnoe','DateEmb','Cnss','Salaire'];
  constructor(public service:EnsService) { }

  ngOnInit(): void {
    this.service.GetAll();
      }
}
