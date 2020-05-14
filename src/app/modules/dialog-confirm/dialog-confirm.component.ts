import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DialogConfirmServicesService } from 'src/app/services/dialog-confirm-services.service';
import { EnsService } from 'src/app/services/ens.service';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data,
  public dialogRef: MatDialogRef<DialogConfirmComponent>) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close(false);
  }
}
