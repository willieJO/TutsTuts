import { PrincipalService } from './../principal.service';
import { Component } from '@angular/core';
import { CloudinaryService } from '../.././cloudinary.service';
import { AuthService } from 'src/app/security/auth.service';
import { Evento } from 'src/app/core/model';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  selectedImage: File | null = null;
  teste: number | null = null;
  currentPage = 1;
  itemsPerPage = 3;
  allCardDataList: Evento[] = [];
  paginatedCardDataList: Evento[] = [];
  loading: boolean = false;
  showLoading: boolean = false;
  cardDataList: Evento[] = [];

  constructor(private cloudinaryService: CloudinaryService,
     private auth: AuthService,
     private principalService:PrincipalService) {}

  ngOnInit() {
    this.principalService.obterEventos().then((data: Evento[]) => {
      this.cardDataList = data;
      this.allCardDataList = [...this.cardDataList];
      this.loadNextPage();
      window.onscroll = () => {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
          this.handleScroll();
        }
      };
    }).catch((error) => {
      console.error('Ocorreu um erro ao obter os eventos: ', error);
    });
    
  }

  loadNextPage() {
    const endIndex = this.currentPage * this.itemsPerPage;
    this.paginatedCardDataList = this.allCardDataList.slice(0, endIndex);
  }

  handleScroll() {
    if (!this.loading) {
      this.showLoading = true; // Ativar o indicador de carregamento
      this.loading = true;
      this.currentPage++;
      this.loadNextPage();
      this.loading = false;
      this.showLoading = false; 
    }
  }

  onFileSelected(event: any) {
    this.auth.getUserIdFromToken();
    this.selectedImage = event.target.files[0];
  }

  async uploadImage() {
    if (!this.selectedImage) {
      return;
    }
    try {
      const result = await this.cloudinaryService.uploadImage(this.selectedImage);
      if (result && result.secure_url) {
        console.log(result.secure_url);
      }
    } catch (error) {
      console.error('Erro ao enviar imagem:', error);
    }
  }
  
}
