import { Component } from '@angular/core';
import { CloudinaryService } from '../.././cloudinary.service';
import { AuthService } from 'src/app/security/auth.service';

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
  allCardDataList: any[] = [];
  paginatedCardDataList: any[] = [];
  loading: boolean = false;
  showLoading: boolean = false;

  constructor(private cloudinaryService: CloudinaryService, private auth: AuthService) {}

  ngOnInit() {
    this.allCardDataList = [...this.cardDataList];
    this.loadNextPage();
    window.onscroll = () => {
      if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        this.handleScroll();
      }
    };
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
      setTimeout(() => {
        this.loadNextPage();
        this.loading = false;
        this.showLoading = false; // Desativar o indicador de carregamento após carregar os dados
      }, 10000); // Defina o atraso para 10000 milissegundos (ou 10 segundos)

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

  // Dados iniciais
  cardDataList = [
    {
      id: 1,
      title: 'Shiba Inu',
      imageSrc: 'https://res.cloudinary.com/duondvpwq/image/upload/v1696896076/fcdkssdxswqseh8dpopp.jpg',
      content: 'Texto de exemplo 1',
      likes: 500
    },
    {
      id: 1,
      title: 'Shiba Inu',
      imageSrc: 'https://res.cloudinary.com/duondvpwq/image/upload/v1696896076/fcdkssdxswqseh8dpopp.jpg',
      content: 'Texto de exemplo 1',
      likes: 500
    },
    {
      id: 1,
      title: 'Shiba Inu',
      imageSrc: 'https://res.cloudinary.com/duondvpwq/image/upload/v1696896076/fcdkssdxswqseh8dpopp.jpg',
      content: 'Texto de exemplo 1',
      likes: 500
    },
    {
      id: 1,
      title: 'Shiba Inu',
      imageSrc: 'https://res.cloudinary.com/duondvpwq/image/upload/v1696896076/fcdkssdxswqseh8dpopp.jpg',
      content: 'Texto de exemplo 1',
      likes: 500
    },
    {
      id: 1,
      title: 'Shiba Inu',
      imageSrc: 'https://res.cloudinary.com/duondvpwq/image/upload/v1696896076/fcdkssdxswqseh8dpopp.jpg',
      content: 'Texto de exemplo 1',
      likes: 500
    },
    {
      id: 1,
      title: 'Shiba Inu',
      imageSrc: 'https://res.cloudinary.com/duondvpwq/image/upload/v1696896076/fcdkssdxswqseh8dpopp.jpg',
      content: 'Texto de exemplo 1',
      likes: 500
    },
    {
      id: 1,
      title: 'Shiba Inu',
      imageSrc: 'https://res.cloudinary.com/duondvpwq/image/upload/v1696896076/fcdkssdxswqseh8dpopp.jpg',
      content: 'Texto de exemplo 1',
      likes: 500
    },
    {
      id: 1,
      title: 'Shiba Inu',
      imageSrc: 'https://res.cloudinary.com/duondvpwq/image/upload/v1696896076/fcdkssdxswqseh8dpopp.jpg',
      content: 'Texto de exemplo 1',
      likes: 500
    },
    {
      id: 1,
      title: 'Shiba Inu',
      imageSrc: 'https://res.cloudinary.com/duondvpwq/image/upload/v1696896076/fcdkssdxswqseh8dpopp.jpg',
      content: 'Texto de exemplo 1',
      likes: 500
    },
    {
      id: 1,
      title: 'Shiba Inu',
      imageSrc: 'https://res.cloudinary.com/duondvpwq/image/upload/v1696896076/fcdkssdxswqseh8dpopp.jpg',
      content: 'Texto de exemplo 1',
      likes: 500
    },

    // Adicione mais objetos conforme necessário
  ];
}
