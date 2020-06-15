import { FirstPageComponent } from './modules/first-page/first-page.component';
import { AdminGuardService } from './services/admin-guard.service';
import { CompteComponent } from './modules/compte/compte.component';
import { StreamsComponent } from './modules/streams/streams.component';
import { HoldEtudiantComponent } from './modules/hold-etudiant/hold-etudiant.component';
import { ChatComponent } from './modules/chat/chat.component';
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
  {path: '', redirectTo: 'Home', pathMatch: 'full'},
  {
    path:'Home',
    component:FirstPageComponent
  },
  {
    path: 'Authentification',
    component: AuthentificationComponent
  },
  {
    path: 'Acceuil',
    component: DefaultComponent,
    children: [{
      path: '',
      component: DashboardComponent,
      children: [{
        path: 'EtudiantNonApp',
        component: HoldEtudiantComponent,
        canActivate: [AdminGuardService]
      }]
    },
    {
      path: 'posts',
      component: PostsComponent,
      canActivate: [AdminGuardService]
    },
    {
      path: 'Etudiants',
      component: PostsEtudiantComponent,
      canActivate: [AdminGuardService]
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
      }
    ],canActivate: [AdminGuardService]
    },
    {
      path: 'chat',
      component: ChatComponent,
    },
    {
      path: 'streams',
      component: StreamsComponent,
    },
    {
      path: 'compte',
      component: CompteComponent,
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
