import { AuthService } from 'src/app/security/auth.service';
import { Component, OnInit, HostListener }
 from '@angular/core';@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit  {
  title = 'tutstuts-ui';
  isMobile: boolean;
  constructor(public authService: AuthService) {}

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.isMobile = window.innerWidth <= 768;
  }
}
