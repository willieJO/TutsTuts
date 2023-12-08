import { Component, OnInit  } from '@angular/core';
import { AuthService } from '../../security/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-slidebarmobile',
  templateUrl: './slidebarmobile.component.html',
  styleUrls: ['./slidebarmobile.component.css']
})
export class SlidebarmobileComponent {
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
  goToMeusEventos() {
    this.router.navigate(['/editarEvento']);
  }
  goToLoginPage() {
    localStorage.removeItem("token");
    localStorage.removeItem("cnpj");
    this.authService.cnpjSubject.next(this.authService.getCnpjBoolean());
    this.router.navigate(["/login"])
  }
}
