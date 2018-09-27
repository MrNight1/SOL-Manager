import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-nav-responsivo',
  templateUrl: './nav-responsivo.component.html',
  styleUrls: ['./nav-responsivo.component.css']
})
export class NavResponsivoComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }

  logout(): void {
    this.authService.logout();
  }

}
