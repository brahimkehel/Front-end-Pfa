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
  columnlist: string[] = ['Nom', 'Prenom', 'Email', 'Cin', 'DateNais', 'Adresse', 'Telephnoe', 'CNE', 'Genre','filiere'];
  checks:boolean=false;
  array=[];
  constructor(public service: Etuservice,public notif:ToastrService) { }

  ngOnInit(): void {
    this.service.getNonAppStudents();
  }
  bulck(e){
    if(e.target.checked==true){
      this.checks=true;
      for(let i of this.service.Etudiants){
        if(this.array.indexOf(i.id)==-1){
        this.array.push(i.id);
      }else{
        console.log("rah kaynnn");
      }
      }
      console.log(this.array);
    }else{ 
      this.checks=false;
      this.array.splice(0,this.array.length);
    }
  }
  Remplir(e,id){
        if(e.target.checked==true){
          this.array.push(id);
        }else{
          const index=this.array.indexOf(id)
          if(index!==-1){
            this.array.splice(index,1);
          }
          console.log(this.array);
        }
  }

}
