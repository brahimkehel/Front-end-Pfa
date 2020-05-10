import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class EnseignantsModule {
  id:string;
  nom:string;
  prenom:string;
  email:string;
  cin:string;
  dateNais:Date;
  adresse:string;
  telephnoe:Int16Array;
  dateEmb:Date;
  cnss:string;
  salaire:string;
  motdePasse:string;
}
