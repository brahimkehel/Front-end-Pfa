import { HttpClient } from '@angular/common/http';
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
  disabled:boolean;

  constructor(public service: Etuservice,public notif:ToastrService,private http:HttpClient) { }

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
  checkDisabled(){
    return this.array.length>0;
  }
  Approved(){
    for(let i of this.array)
    {
      this.http.patch("http://localhost:57759/api/Etudiants/" +i,[{
        "op": "replace",
        "path": "/approve",
        "value":"true" }]).toPromise().then(
          res=>{this.service.getNonAppStudents();console.log("rani tapprovit")},
          err=>{console.log(err)}
        );
        
    }
  }
}
