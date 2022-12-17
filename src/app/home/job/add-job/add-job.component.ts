import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent implements OnInit {

  jobForm = this.formBuilder.group({
    title: [''],
    price: [0]
  });

  constructor(
    public dialogRef: MatDialogRef<AddJobComponent>,
    private formBuilder: NonNullableFormBuilder,
    //private jobService: JobService
  ) { }

  ngOnInit(): void {
  }

  createJob(){
    //this.jobService.saveJob(this.jobForm.value);
    console.log(this.jobForm.value)
  }

  cancel(){
    this.dialogRef.close();
  }

}
