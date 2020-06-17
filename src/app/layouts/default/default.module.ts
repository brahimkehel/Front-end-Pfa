import { UploadFilesComponent } from './../../modules/upload-files/upload-files.component';
import { CompteComponent } from './../../modules/compte/compte.component';
import { StreamsComponent } from './../../modules/streams/streams.component';
import { PieChartComponent } from './../../modules/widgets/pie-chart/pie-chart.component';
import { HoldEtudiantComponent } from './../../modules/hold-etudiant/hold-etudiant.component';
import { ChatComponent } from './../../modules/chat/chat.component';
import { FormAffectationComponent } from './../../modules/form-affectation/form-affectation.component';
import { FormSeanceComponent } from './../../modules/form-seance/form-seance.component';
import { SeanceComponent } from './../../modules/seance/seance.component';
import { FormEnseignantUpdateComponent } from './../../modules/form-enseignant-update/form-enseignant-update.component';
import { PostsEtudiantComponent } from './../../modules/posts-etudiant/posts-etudiant.component';
import { FormEnseignantComponent } from './../../modules/form-enseignant/form-enseignant.component';
import { FormEtudiantComponent } from './../../modules/posts/form-etudiant/form-etudiant.component';
import { MatDividerModule } from '@angular/material/divider';
import { SharedModule } from './../../shared/shared.module';
import { PostsComponent } from './../../modules/posts/posts.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './../../modules/dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule,NgForm, ReactiveFormsModule, FormGroupDirective, FormControl } from '@angular/forms';
import {MatDialogModule} from'@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    FormEtudiantComponent,
    FormEnseignantComponent,
    PostsEtudiantComponent,
    FormEnseignantUpdateComponent,
    SeanceComponent,
    FormSeanceComponent,
    FormAffectationComponent,
    ChatComponent,
    HoldEtudiantComponent,
    PieChartComponent,
    StreamsComponent,
    CompteComponent,
    UploadFilesComponent,
  ],
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonModule,
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatInputModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule,
    MatCardModule,
    MatDialogModule,
    
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DefaultModule { }