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
  Cin:string;
  DateNais:Date;
  Adresse:string;
  Telephnoe:Int16Array;
  DateEmb:Date;
  Cnss:string;
  Salaire:string;
  MotdePasse:string;
}
