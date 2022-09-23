import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { UserComponentComponent } from './user-component/user-component.component';


@NgModule({
  declarations: [
    DashboardComponent,
    UserComponentComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
  
  ],
  exports:[
    UserComponentComponent
  ]
})
export class DashboardModule { }
