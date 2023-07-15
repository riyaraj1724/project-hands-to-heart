import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './components/dashboard.module';
import { DashboardServices } from './components/dashboard.service';
import { LoginServices } from './components/login.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [ DashboardServices, LoginServices],
  bootstrap: [AppComponent]
})
export class AppModule { }  
