import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { globalUrlApi } from 'src/assets/global-variables';
import { Job } from './../models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private readonly APIurl = `${globalUrlApi}job`;

  constructor(
    private httpClient: HttpClient
  ) { }

  getJobs() : Observable<Job[]> {
    return this.httpClient.get<Job[]>(this.APIurl)
  }

  saveJob(job : Partial<Job>){
    return this.httpClient.post(this.APIurl, job, { observe: 'response' })
  }
}
