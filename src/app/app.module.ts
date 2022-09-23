import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AppComponent } from './app.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponentComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    DashboardModule,
    
  ],

  exports:[],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
