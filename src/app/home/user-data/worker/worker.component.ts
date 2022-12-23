import { NonNullableFormBuilder } from '@angular/forms';
import { Person } from './../../../models/person';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  fullName = this.data.fullName;
  email = this.data.email;
  cpf = this.data.cpf;
  userName = this.data.userName;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Person,
    public dialogRef: MatDialogRef<WorkerComponent>
  ) { }

  ngOnInit(): void {
    console.log(this.data)
  }

  onClose(){
    this.dialogRef.close();
  }

}
