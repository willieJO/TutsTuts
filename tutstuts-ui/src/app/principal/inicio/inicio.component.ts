import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent {
  // minha requisição vai pegar essas informações
  cardDataList = [
    {
      title: 'Shiba Inu',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'Texto de exemplo 1',
      likes: 500
    },
    {
      title: 'Segundo usuario',
      imageSrc: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content: 'Texto de exemplo 2',
      likes: 50
    },
    // Adicione mais objetos conforme necessário
  ];
}
