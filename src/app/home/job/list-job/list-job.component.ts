import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { JobWithId } from './../../../models/job-with-id';
import { JobService } from './../../../services/job.service';
import { PersonService } from './../../../services/person.service';
import { WorkerComponent } from './../../user-data/worker/worker.component';
import { BuyJobComponent } from './../buy-job/buy-job.component';

@Component({
  selector: 'app-list-job',
  templateUrl: './list-job.component.html',
  styleUrls: ['./list-job.component.css']
})
export class ListJobComponent implements OnInit {

  listJobs: JobWithId[] = [];

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

  onContractJob(job: JobWithId){
    this.dialog.open(BuyJobComponent, {
      width: '400px',
      data: job
    })
  }

}
