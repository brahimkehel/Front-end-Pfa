import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EnseignantsModule {
  id?:Int16Array;
  nom:string;
  prenom:string;
  email:string;
  cin:string;
  dateNais:string;
  adresse:string;
  telephone:string;
  dateEmb:string;
  cnss:string;
  salaire:string;
  genre:string;
  motDePasse:string;
}
