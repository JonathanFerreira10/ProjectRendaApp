import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-coach',
  templateUrl: './coach.page.html',
  styleUrls: ['./coach.page.scss'],
})
export class CoachPage implements OnInit {

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  } 

  async showAlert() {
    const MyAlert = await this.alertCtrl.create({
      message: 'Nossa equipe sempre mantém este campo atualizado, para que voce possua as melhores dicas. Desenvolvida por uma equipe focada em sua satisfação o campo dicas inteligentes tem seu valor e seguindo à risca verá seus resultados ;)',
      buttons: ['OK!']
    });
    MyAlert.present();
  }

  public tips: Array<any> = [
    { title: 'Economize', content: "A certos momentos que talvez uma escolha boa venha a acalhar, quando houver a possibilidade de economizar nao pense em uma oportinidade perdida, e sim e uma possbilidade de aproveitar futuramente. Sabe aquele momento que é convidado a viajar ou sair e nao possui a grana suficiente. Talvez economizando um pouco antes isso nao venha acontecer."},
    { title: 'Invista', content: "Muitos pensam que investir é açoes ou mercado financeiro, mas nao a inumeras formas diferentes de investir. Voce sabia que o ouro aumenta cada vez mais devido a sua escassez, muitas pessoas investem em joias para que haja uma rentabilidade futura. Então procure formas alternativas de investir seu rico dinheiro."},
    { title: 'Promoções!', content: "Vivemos em um mercado no qual a uma grande concorrencia entre as empresas e isso gera oportunidades para nós clientes, Ja ouviu falar em cashback? Ou desconto por operadora? Procure formas alternativas de retorno financeiro a você, sei que irá se surpreender."},
    { title: 'Cuidado com Golpes', content: "Em meio a um mundo economico a pessoas que usufruem das oportunidades ou falhas para aplicar golpes. Entao reforçamos tome muito cuidado, nao faça transferencias a pessoas desconhecidas, utilize plataformas de compras online no qual lhe garanta uma garantia de compra e sempre busque saber seus direitos como consumidor. Saiba se defender e atacar quando necessario ;)"},
    { title: 'Prepare-se', content: "Guarde um dinheiro, pense em planos futuros. Tenha objetivos isso irá leva-lo a busca-los. E principalmente nao desista, seus sonhos são apenas seus e voce é o unico que pode alcança-los."},
    { title: 'Organização', content: "Sempre tenha seus custos perto de voce e se organize, isso ira ajuda-lo sempre que precisar e nao esqueça parcelamentos ou dividas ativas elas precisam ser prioridades no momento pode aparecer como algo ruim mas seguindo as dicas alteriores elas nao irao aparecer."},
  ]
}

