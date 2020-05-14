import { DialogConfirmComponent } from './../modules/dialog-confirm/dialog-confirm.component';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogConfirmServicesService {

  constructor(public dialog:MatDialog) { }
  openConfirmDialog(){
    return this.dialog.open(DialogConfirmComponent,{
       width: 'auto',
       panelClass: 'confirm-dialog-container',
       disableClose: true,
   });
}
}
