import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AddJobComponent } from './home/job/add-job/add-job.component';
import { LoginService } from './services/login.service';
import { UtilsService } from './services/utils.service';

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
    private utilsService: UtilsService,
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
    var id = this.utilsService.getParamUrl(2)
    this.router.navigate(['/home', id])
    this.utilsService.updateIndexNavigation(0)
  }

  onPerfil() {
    this.router.navigate([this.router.url + '/profile']);
  }

  onContracts() {
    this.onHome()
    this.utilsService.updateIndexNavigation(1)
  }

  onServices() {
    console.log('service')
  }

  addJob() {
    this.dialog.open(AddJobComponent, { width: '300px' })
  }


}
