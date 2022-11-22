import { Component } from '@angular/core';
import {faHomeUser, faUsers, faUserCheck, faBed, faDollarSign, faDoorClosed} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  faHomeUser = faHomeUser;
  faUsers = faUsers;
  faUserCheck = faUserCheck;
  faBed = faBed;
  faDollarSign = faDollarSign;
  faDoorClosed = faDoorClosed;
}
