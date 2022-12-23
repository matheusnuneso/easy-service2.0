import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { globalUrlApi } from 'src/assets/global-variables';
import { Job } from './../models/job';
import { JobWithId } from './../models/job-with-id';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private readonly APIurl = `${globalUrlApi}job`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getJobs() : Observable<JobWithId[]> {
    return this.httpClient.get<JobWithId[]>(this.APIurl)
  }

  saveJob(job : Partial<Job>){
    return this.httpClient.post(this.APIurl, job, { observe: 'response' })
  }
}
