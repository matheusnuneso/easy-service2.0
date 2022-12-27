import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JobWithId } from './../../../models/job-with-id';
import { JobSignedService } from './../../../services/job-signed.service';

@Component({
  selector: 'app-buy-job',
  templateUrl: './buy-job.component.html',
  styleUrls: ['./buy-job.component.css']
})
export class BuyJobComponent implements OnInit {

  contractForm = this.formBuilder.group({
    date: ['']
  });

  minDate: Date;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: JobWithId,
    public dialogRef: MatDialogRef<BuyJobComponent>,
    private formBuilder: NonNullableFormBuilder,
    public datepipe: DatePipe,
    private _snackBar: MatSnackBar,
    private jobSignedService: JobSignedService
  ) {

    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear, currentMonth, currentDay);

  }

  ngOnInit(): void {}

  onContract(){
    const newDate = this.datepipe.transform(this.contractForm.value.date, 'dd/MM/yyyy')

    if (newDate === null) {
      this._snackBar.open('É necessário inserir uma data.', 'OK', { duration: 5000 })
    } else {
      this.jobSignedService.saveJobSigned(this.data, newDate)
    }

  }

  onCancel(){
    this.dialogRef.close();
  }

}
