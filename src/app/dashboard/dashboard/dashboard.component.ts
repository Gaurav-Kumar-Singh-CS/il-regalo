import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {faHomeUser, faUsers, faUserCheck, faBed, faDollarSign, faDoorClosed, faGear} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css', '../../../styles.css']
})
export class DashboardComponent{
  faHomeUser = faHomeUser;
  faUsers = faUsers;
  faUserCheck = faUserCheck;
  faBed = faBed;
  faDollarSign = faDollarSign;
  faDoorClosed = faDoorClosed;
  faGear = faGear;
  title = ""

  constructor(private router:Router){
    if(this.router.url === '/room'){
      this.title = "Room Management"
    }else
    if(this.router.url === '/staff'){
      this.title = "Staff Management"
    }else
    if(this.router.url === '/metrics'){
      this.title = "Dashboard"
    }else
    if(this.router.url === '/guest'){
      this.title = "Guest Management"
    }else
    if(this.router.url === '/reservation'){
      this.title = "Reservation Management"
    }else
    if(this.router.url === '/billing'){
      this.title = "Billing Management"
    }
  }
  
}
