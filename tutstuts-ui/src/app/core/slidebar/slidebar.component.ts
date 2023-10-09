import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../../security/auth.service';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent {
  constructor(public authService: AuthService) {} 

  ngOnInit(): void {}
  sidebarVisible: boolean = false;

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
