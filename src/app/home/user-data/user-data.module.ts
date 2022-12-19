import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { ProfileComponent } from './profile/profile.component';
import { UserDataRoutingModule } from './user-data-routing.module';
import { UserJobsComponent } from './user-jobs/user-jobs.component';


@NgModule({
  declarations: [
    ProfileComponent,
    UserJobsComponent
  ],
  imports: [
    CommonModule,
    UserDataRoutingModule,
    SharedModule
  ]
})
export class UserDataModule { }
