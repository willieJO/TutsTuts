import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../../security/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slidebar',
  templateUrl: './slidebar.component.html',
  styleUrls: ['./slidebar.component.css']
})
export class SlidebarComponent {
  cnpj: boolean  = localStorage.getItem('cnpj') != null ? true : false;

  constructor(public authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.cnpj$.subscribe((cnpj) => {
      this.cnpj = cnpj;
    });
  }
  sidebarVisible: boolean = true;
  goToHomePage() {
    this.router.navigate(['/principal']);
  }
  goToProfilePage() {
    this.router.navigate(['/perfil']);
  }
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
  goToAddEvent() {
    this.router.navigate(['/registroEvento']);
  }
  gotToSearch() {
    this.router.navigate(['/busca']);
  }
  goToMeusEventos() {
    this.router.navigate(['/editarEvento']);
  }
  goToLoginPage() {
    localStorage.removeItem("token");
    localStorage.removeItem("cnpj");
    localStorage.removeItem("user_id");
    this.router.navigate(["/login"])
  }
}

