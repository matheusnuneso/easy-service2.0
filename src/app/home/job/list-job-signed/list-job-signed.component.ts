import { DatePipe } from '@angular/common';
import { JobSigned } from './../../../models/jobSigned';
import { JobSignedService } from './../../../services/job-signed.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-job-signed',
  templateUrl: './list-job-signed.component.html',
  styleUrls: ['./list-job-signed.component.css']
})
export class ListJobSignedComponent implements OnInit {

  readonly displayedColumns = ['job', 'client', 'finalPrice', 'jobDate', 'contractDate'];

  jobsSigned: JobSigned[] = [];

  constructor(
    private jobSignedService: JobSignedService,
    public datepipe: DatePipe
  ) {
    this.filltable()
  }

  ngOnInit(): void {}

  filltable(){
    this.jobSignedService.getJobSigned().subscribe((data) => {

      data.forEach(job => {
        const contracteDate = this.datepipe.transform(job.contractDate, 'dd/MM/yyyy')
        const jobDate = this.datepipe.transform(job.jobDate, 'dd/MM/yyyy')

        if(contracteDate != null && jobDate != null){
          job.contractDate = contracteDate
          job.jobDate = jobDate
        }
      })

      this.jobsSigned = data
    })

  }

}
