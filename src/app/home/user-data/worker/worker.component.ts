import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Person } from './../../../models/person';

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

  ngOnInit(): void {}

  onClose(){
    this.dialogRef.close();
  }

}
