import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from './authentication-guard.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
    //canActivate: [AuthenticationGuard]    
  },
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(md => md.DashboardModule),
    canActivate: [AuthenticationGuard]    
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }