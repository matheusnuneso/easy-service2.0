import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },

  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },

  { path: 'home/:id', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },

  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
