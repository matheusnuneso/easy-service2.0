import { JobService } from './../../../services/job.service';
import { Job } from './../../../models/job';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {

  listJobs: Job[] = [];

  constructor(
    private jobService: JobService
  ) { }

  ngOnInit(): void {
    this.getJobs()
  }

  getJobs(){
    this.jobService.getJobs()
      .subscribe((data) => {
        this.listJobs = data
      })
  }

}
