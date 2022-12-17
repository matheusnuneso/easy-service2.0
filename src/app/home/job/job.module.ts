import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { AddJobComponent } from './add-job/add-job.component';
import { JobRoutingModule } from './job-routing.module';


@NgModule({
  declarations: [
    AddJobComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    SharedModule
  ]
})
export class JobModule { }
