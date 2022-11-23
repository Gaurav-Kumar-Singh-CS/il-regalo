import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { RoomComponent } from './dashboard/room/room.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StaffComponent } from './dashboard/staff/staff.component';
import { GuestComponent } from './dashboard/guest/guest.component';
import { ReservationComponent } from './dashboard/reservation/reservation.component';
import { BillingComponent } from './dashboard/billing/billing.component';
import { MetricsComponent } from './dashboard/metrics/metrics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    RoomComponent,
    StaffComponent,
    GuestComponent,
    ReservationComponent,
    BillingComponent,
    MetricsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
