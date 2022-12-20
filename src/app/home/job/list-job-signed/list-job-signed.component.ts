import { JobSigned } from './../../../models/jobSigned';
import { JobSignedService } from './../../../services/job-signed.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-job-signed',
  templateUrl: './list-job-signed.component.html',
  styleUrls: ['./list-job-signed.component.css']
})
export class ListJobSignedComponent implements OnInit {

  readonly displayedColumns = ['job', 'client', 'finalPrice'];

  jobsSigned: JobSigned[] = [];

  constructor(
    private jobSignedService: JobSignedService
  ) {
    this.filltable()
  }

  ngOnInit(): void {}

  filltable(){
    this.jobSignedService.getJobSigned().subscribe((data) => {
      this.jobsSigned = data
    })
  }

}
