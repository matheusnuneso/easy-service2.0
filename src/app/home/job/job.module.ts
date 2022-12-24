import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from './../../shared/shared.module';

import { AddJobComponent } from './add-job/add-job.component';
import { JobRoutingModule } from './job-routing.module';
import { ListJobSignedComponent } from './list-job-signed/list-job-signed.component';
import { ListJobComponent } from './list-job/list-job.component';
import { BuyJobComponent } from './buy-job/buy-job.component';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AddJobComponent,
    ListJobSignedComponent,
    ListJobComponent,
    BuyJobComponent
  ],
  imports: [
    CommonModule,
    JobRoutingModule,
    SharedModule,
    MatNativeDateModule
  ],
  exports: [
    ListJobSignedComponent
  ]
})
export class JobModule { }
