import { LoginService } from './services/login.service';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'meutrampo';
  showToolBar: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private dialog: MatDialog
  ){}

  ngOnInit(){
    this.loginService.showToolBarEmitter.subscribe(
      show => this.showToolBar = show
    );
  }

  onLogin() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }

  onHome() {
    console.log('onHome')
  }

  onPerfil() {
    console.log('onPerfil')
  }

  onContracts() {
    console.log('onContracts')
  }

  onServices() {
    console.log('service')
  }

  addJob() {
    console.log('addJob')
  }


}
