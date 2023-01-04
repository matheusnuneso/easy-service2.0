import { UtilsService } from './../../../services/utils.service';
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
    private dialog: MatDialog,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    this.getJobs()
  }

  getJobs(){
    const searchFilter = this.utilsService.getParamUrl(4).replace('%20', ' ')

    this.jobService.getJobs()
      .subscribe((data) => {

        if (searchFilter === 'all') {
          this.listJobs = data

        } else {

          data.forEach(job => {
            if (job.title.toLowerCase().includes(searchFilter)) {
              this.listJobs.push(job)
            }
          });

        }

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
