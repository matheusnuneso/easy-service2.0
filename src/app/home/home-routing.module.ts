import { AuthGuard } from './../guards/auth.guard';
import { NavigationComponent } from './navigation/navigation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: NavigationComponent },
  { path: 'profile', loadChildren: () => import('./user-data/user-data.module').then(m => m.UserDataModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
