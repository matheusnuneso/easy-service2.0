import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { ProfileComponent } from './profile/profile.component';
import { UserDataRoutingModule } from './user-data-routing.module';
import { UserJobsComponent } from './user-jobs/user-jobs.component';
import { WorkerComponent } from './worker/worker.component';


@NgModule({
  declarations: [
    ProfileComponent,
    UserJobsComponent,
    WorkerComponent
  ],
  imports: [
    CommonModule,
    UserDataRoutingModule,
    SharedModule
  ]
})
export class UserDataModule { }
