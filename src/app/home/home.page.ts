import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public options: Array<any> = [
    { name: 'Criar Fatura' },
    { name: 'Visualizar Fatura' },
    { name: 'Status da Renda' },
    { name: 'Coach de Investimento' },
  ];

  public slidesOptions: any = { slidesPerView: 3, freeModey: true};

  constructor() {}
  
}
