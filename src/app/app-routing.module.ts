import { FormEtudiantComponent } from './modules/posts/form-etudiant/form-etudiant.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';

const routes: Routes = [
  {path:'Authentification',
  component:AuthentificationComponent
  },
  {path: 'Acceuil',
  component:DefaultComponent,
  children:[{
    path:'',
    component:DashboardComponent},
    {path:'posts',
    component:PostsComponent,
    children:[{
      path:'',
      component:FormEtudiantComponent
    }]
  }],
  canActivate:[AuthGuardService]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
