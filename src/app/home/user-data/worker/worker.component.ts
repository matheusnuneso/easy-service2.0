import { Person } from './../../../models/person';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-worker',
  templateUrl: './worker.component.html',
  styleUrls: ['./worker.component.css']
})
export class WorkerComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Person) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
