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
  showToolBar: boolean = true;

  constructor(
    private router: Router,
    private dialog: MatDialog
  ){}

  onLogin() {
    console.log('onLogin')
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
