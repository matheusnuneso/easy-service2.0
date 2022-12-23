import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-buy-job',
  templateUrl: './buy-job.component.html',
  styleUrls: ['./buy-job.component.css']
})
export class BuyJobComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    public dialogRef: MatDialogRef<BuyJobComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
