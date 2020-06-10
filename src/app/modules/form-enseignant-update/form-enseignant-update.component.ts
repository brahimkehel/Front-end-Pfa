import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { EnsService } from 'src/app/services/ens.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-enseignant-update',
  templateUrl: './form-enseignant-update.component.html',
  styleUrls: ['./form-enseignant-update.component.scss']
})
export class FormEnseignantUpdateComponent implements OnInit {

  hide:boolean=true;
  constructor(public service:EnsService,public dialog:MatDialog,public notif:ToastrService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.UpdateEns().toPromise().then(
      res => { this.service.GetAll();this.notif.success('Modifer','Modifer avec success');},
      err => { console.log(err); }
    );
    this.dialog.closeAll();
  }
  onClear() {
    this.service.form.reset();
  }
  close(){
    this.dialog.closeAll();
  }
}
