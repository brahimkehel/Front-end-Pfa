import { EnsService } from './../../services/ens.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-form-enseignant',
  templateUrl: './form-enseignant.component.html',
  styleUrls: ['./form-enseignant.component.scss']
})
export class FormEnseignantComponent implements OnInit {

  constructor(public service:EnsService,public dialog:MatDialog,public notif:ToastrService) { }

  ngOnInit(): void {
    this.service.onInit();
  }
  onSubmit()
  {
    this.service.AddEns().toPromise().then(
      res=>{this.service.GetAll();this.notif.success('Ajouter','Ajouté avec success');},
      err=>{console.log(err);}
    );
   this.dialog.closeAll();
   
  }
  onClear(){
    this.service.form.reset();
  }
  close(){
    this.service.form.reset();
    this.dialog.closeAll();
  }
 
}
