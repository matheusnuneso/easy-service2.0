import { Person } from './../models/person';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { globalUrlApi } from 'src/assets/global-variables';
import { Credentials } from './../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private readonly APIurl = `${globalUrlApi}person/authPerson`;

  private userAuth = false;
  showToolBarEmitter = new EventEmitter<boolean>();

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  userLogin(credentials: Credentials){
    this.httpClient.post<Person>(this.APIurl, credentials, { observe: 'response' })
      .subscribe({
        next: (n) => { this.loginSuccess(n.body?.id) },
        error: (r) => { this.loginError(r.error) }
      })
  }

  logout(){
    this.showToolBarEmitter.emit(false);
  }

  getUserAuth(){
    return this.userAuth;
  }

  loginError(message: string){
    this._snackBar.open(message, 'OK', { duration: 5000 })
  }

  loginSuccess(id: any){
    this.userAuth = true;
    this.showToolBarEmitter.emit(true);
    this.router.navigate(['/home', id]);
  }
}
