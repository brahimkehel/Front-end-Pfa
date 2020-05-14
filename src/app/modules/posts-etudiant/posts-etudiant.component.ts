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
  constructor(public service: Etuservice) { }

  ngOnInit(): void {
    this.service.getAllStudents();
  }

}
