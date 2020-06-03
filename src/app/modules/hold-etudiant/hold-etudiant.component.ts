import { ToastrService } from 'ngx-toastr';
import { Etuservice } from 'src/app/services/Etu-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hold-etudiant',
  templateUrl: './hold-etudiant.component.html',
  styleUrls: ['./hold-etudiant.component.scss']
})
export class HoldEtudiantComponent implements OnInit {

  searchText: string;
  number: number = 1;
  columnlist: string[] = ['Nom', 'Prenom', 'Email', 'Cin', 'DateNais', 'Adresse', 'Telephnoe', 'CNE', 'Genre'];
  constructor(public service: Etuservice,public notif:ToastrService) { }

  ngOnInit(): void {
    this.service.getNonAppStudents();
  }

}
