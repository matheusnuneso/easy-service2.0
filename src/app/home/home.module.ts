import { JobModule } from './job/job.module';
import { SharedModule } from './../shared/shared.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    NavigationComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    JobModule
  ]
})
export class HomeModule { }
