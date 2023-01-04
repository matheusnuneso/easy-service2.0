import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListJobComponent } from './list-job/list-job.component';

const routes: Routes = [
  { path: ':jobSigned', component: ListJobComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobRoutingModule { }
