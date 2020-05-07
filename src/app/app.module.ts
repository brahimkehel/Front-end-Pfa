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
<<<<<<< HEAD
import { UserDataComponent } from './modules/dashboard/user-data/user-data.component';
import { UserDataListComponent } from './modules/dashboard/user-data-list/user-data-list.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FlxUiDataTable} from 'flx-ui-datatable';
import { Http } from '@angular/http';


=======
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {FlexLayoutModule} from '@angular/flex-layout';
>>>>>>> c56f137f42a7221877a8c1f273210bc081a82d2c

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    AuthentificationComponent,
    UserDataComponent,
    UserDataListComponent
=======
    AuthentificationComponent
>>>>>>> c56f137f42a7221877a8c1f273210bc081a82d2c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    HttpClientModule,
    FormsModule,
<<<<<<< HEAD
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatButtonModule

=======
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FlexLayoutModule
>>>>>>> c56f137f42a7221877a8c1f273210bc081a82d2c
  ],
  providers: [/*AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }*/Etuservice,MatDatepickerModule,MatNativeDateModule,MatSelectModule,{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'accent' },
}],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent],
  entryComponents:[UserDataComponent]
})
export class AppModule { }
