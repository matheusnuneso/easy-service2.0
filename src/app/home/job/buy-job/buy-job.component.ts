import { MatSnackBar } from '@angular/material/snack-bar';
import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

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
    @Inject(MAT_DIALOG_DATA) public data: number,
    public dialogRef: MatDialogRef<BuyJobComponent>,
    private formBuilder: NonNullableFormBuilder,
    public datepipe: DatePipe,
    private _snackBar: MatSnackBar
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
      console.log(newDate)
    }

  }

  onCancel(){
    this.dialogRef.close();
  }

}
