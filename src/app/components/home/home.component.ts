import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ClockService } from '../../services/clock.service';

import { navMenu } from '../../model/TVMenu';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  menu = navMenu;
  private _clockSubscription: Subscription;
  time: Date;

  wallpaperRows: number;
  @HostListener('window:resize', ['$event'])
    onResize(event?) {
      this.wallpaperRows = Math.ceil(window.innerWidth / (window.innerWidth * 0.02));
  }
  constructor(private clockService: ClockService) {
    this.onResize();
  }
  ngOnInit() {
    this.clockService.getClock().subscribe(time => this.time = time);
  }
}
