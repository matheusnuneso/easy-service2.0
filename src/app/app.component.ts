import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddJobComponent } from './home/job/add-job/add-job.component';
import { LoginService } from './services/login.service';

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
    private dialog: MatDialog,
    private actRoute: ActivatedRoute
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
    this.router.navigate([this.router.url + '/profile']);
  }

  onContracts() {
    console.log('onContracts')
  }

  onServices() {
    console.log('service')
  }

  addJob() {
    this.dialog.open(AddJobComponent, { width: '300px' })
  }


}
