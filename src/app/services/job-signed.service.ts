import { JobSigned } from './../models/jobSigned';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JobSignedService {
  //private readonly APIurl = `${globalUrlApi}jobSigned`;
  private readonly APIurl = "/assets/jobSigned.json";

  constructor(private httpClient: HttpClient) { }

  getJobSigned(){
    return this.httpClient.get<JobSigned[]>(this.APIurl);
  }
}
