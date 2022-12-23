import { PersonService } from './../../../services/person.service';
import { WorkerComponent } from './../../user-data/worker/worker.component';
import { MatDialog } from '@angular/material/dialog';
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
    private personService: PersonService,
    private jobService: JobService,
    private dialog: MatDialog
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

  onSeeWorker(idWorker: number){

    this.personService.getPersonPerfil(idWorker).subscribe((resp) => {
      this.dialog.open(WorkerComponent, {
        width: '400px',
        data: resp
      })
    })
  }

  onContractJob(job: Job){
    console.log(job)
  }

}
