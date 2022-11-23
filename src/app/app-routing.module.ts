import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BillingComponent } from './dashboard/billing/billing.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { GuestComponent } from './dashboard/guest/guest.component';
import { MetricsComponent } from './dashboard/metrics/metrics.component';
import { ReservationComponent } from './dashboard/reservation/reservation.component';
import { RoomComponent } from './dashboard/room/room.component';
import { StaffComponent } from './dashboard/staff/staff.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'room',
    component: RoomComponent
  },
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: 'metrics',
    component: MetricsComponent
  },
  {
    path: 'guest',
    component: GuestComponent
  },
  {
    path: 'reservation',
    component: ReservationComponent
  },
  {
    path: 'billing',
    component: BillingComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
