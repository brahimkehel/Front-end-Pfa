import { MatDialogModule } from '@angular/material/dialog';
import { PostsComponent } from './modules/posts/posts.component';
import { Etuservice } from './services/Etu-service.service';
import { MaterialModule } from './material/material.module';
import { AuthService } from './services/auth.service';
import { DefaultModule } from './layouts/default/default.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {HttpClientModule, HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthentificationComponent } from './authentification/authentification.component';
import { AuthInterceptor } from './services/auth.interceptor';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {NgxPaginationModule} from 'ngx-pagination';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { FormEtudiantComponent } from './modules/posts/form-etudiant/form-etudiant.component';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { DialogConfirmComponent } from './modules/dialog-confirm/dialog-confirm.component';


 
@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    DialogConfirmComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule,
   
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MaterialModule,
    NgbModule,
    MatDialogModule
    
    
 
  ],
  exports:[
    MaterialModule
  ],
  providers: [/*AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }*/Etuservice,MatDatepickerModule,MatNativeDateModule,MatSelectModule,NgbCarouselConfig,{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
}],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
  entryComponents:[FormEtudiantComponent,DialogConfirmComponent]
})
export class AppModule { }