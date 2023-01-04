import { MatSnackBar } from '@angular/material/snack-bar';
import { globalUrlApi } from './../../assets/global-variables';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JobWithId } from './../models/job-with-id';
import { JobSigned } from './../models/jobSigned';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class JobSignedService {
  private readonly APIurl = `${globalUrlApi}jobSigned`;
  //private readonly APIurl = "/assets/jobSigned.json";

  constructor(
    private httpClient: HttpClient,
    private utilsService: UtilsService
  ) { }

  getJobSigned(){
    return this.httpClient.get<JobSigned[]>(this.APIurl);
  }

  saveJobSigned(job: JobWithId, contractDate: string, jobDate: string){
    const idClient = +this.utilsService.getParamUrl(2)

    var jobSigned = {
      idJob: job.id,
      finalPrice: job.price,
      idClient: idClient,
      idPerson: job.idPerson,
      jobDate: jobDate,
      contractDate: contractDate
    }

    return this.httpClient.post(this.APIurl, jobSigned, { observe: 'response' })
  }
}
