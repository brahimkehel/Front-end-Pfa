import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UtilisateursModule {
  id:string;
  nom:string;
  prenom:string;
  email:string;
  motdepasse:string;
  status:string;
}
