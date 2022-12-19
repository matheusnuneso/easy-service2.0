import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private router: Router) { }

  getParamUrl(index: number){
    var arrayFullUrl = this.router.url.split('/');
    return arrayFullUrl[index];
  }
}
