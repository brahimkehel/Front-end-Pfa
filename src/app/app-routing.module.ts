import { FormAffectationComponent } from './modules/form-affectation/form-affectation.component';
import { FormSeanceComponent } from './modules/form-seance/form-seance.component';
import { SeanceComponent } from './modules/seance/seance.component';
import { PostsEtudiantComponent } from './modules/posts-etudiant/posts-etudiant.component';
import { FormEtudiantComponent } from './modules/posts/form-etudiant/form-etudiant.component';

import { AuthGuardService } from './services/auth-guard.service';
import { AuthentificationComponent } from './authentification/authentification.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';

const routes: Routes = [
  {path: '', redirectTo: 'Acceuil', pathMatch: 'full'},
  {
    path: 'Authentification',
    component: AuthentificationComponent
  },
 
  {
    path: 'Acceuil',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
    {
      path: 'posts',
      component: PostsComponent,
    },
    {
      path: 'Etudiants',
      component: PostsEtudiantComponent,
    },
    {
      path: 'Seance',
      component: SeanceComponent,
      children: [{
        path: 'FormSeance',
        component: FormSeanceComponent,
      },
      {
        path: 'FormAffectation',
        component: FormAffectationComponent,
      }]
    }
    ],
    canActivate: [AuthGuardService]
  }];
//test test 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
