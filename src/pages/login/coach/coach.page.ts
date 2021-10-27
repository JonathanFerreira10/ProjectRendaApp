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

  public news: Array<any> = [
    { title: 'Ficou sabendo? Amazon vai aceitar PIX, Dia dos Namorados e ‘vale gás’', 
      content: "A Amazon (AMZO34) confirmou que vai adotar em breve o PIX como forma de pagamento em suas vendas online. Segundo o Country Manager da Amazon no Brasil, Daniel Mazini, a companhia já traça estratégias sobre como adotar a plataforma. Antes, entretanto, ela precisa responder algumas dúvidas internamente. Lançado no Brasil no final do ano passado, o PIX já movimentou até abril deste ano mais de R$ 787 bilhões em transferências e ultrapassou a barreira de 80 milhões de cadastrados.",
      link: 'https://investnews.com.br/geral/ficou-sabendo-amazon-vai-aceitar-pix-dia-dos-namorados-e-vale-gas/',
      image: 'https://investnews.com.br/wp-content/uploads/2021/04/2021-03-24T180218Z_1_LYNXMPEH2N1RA_RTROPTP_4_TECH-AMAZON-SINDICATO-1536x1024.jpg',
    },
    { title: 'Governo discute com indústria redução voluntária no uso de energia', 
      content: "O Ministério de Minas e Energia teve reunião com representantes de segmentos da indústria nesta sexta-feira (4) para discutir possíveis ações que poderiam ser adotadas para redução voluntária da demanda por parte de empresas com grande consumo de eletricidade.",
      link: 'https://investnews.com.br/economia/governo-discute-com-industria-reducao-voluntaria-no-uso-de-energia/',
      image: 'https://investnews.com.br/wp-content/uploads/2021/06/2021-06-04T204213Z_1_LYNXNPEH5316F_RTROPTP_4_ELETROBRAS-PRIVATIZATION-1536x1024.jpg',
    },
    { title: 'Ibovespa bate 4 recordes seguidos; hora de investir na bolsa?', 
      content: "O Ibovespa, principal indicador da bolsa brasileira, a B3, bateu seu 4º recorde seguido no último pregão, na quarta-feira (2). A sequência de notícias positivas sobre a bolsa de valores pode atrair novos investidores, animados com a tendência de alta. Mas será que momentos assim são propícios para começar a investir em ações?",
      link: 'https://investnews.com.br/financas/ibovespa-bate-4-recordes-seguidos-hora-de-investir-na-bolsa/',
      image: 'https://investnews.com.br/wp-content/uploads/2021/05/Bolsa-Capa-Stories-400x240.jpg',
    },
    { title: '5 fatos para hoje: declarações do IR crescem 6,8%; Itaúsa vai investir na Aegea', 
      content: "O número de contribuintes que declararam Imposto de Renda este ano superou a expectativa da Receita Federal. Segundo o órgão, o total de declarações recebidas somou 34.168.166, crescimento de 6,8% em relação ao ano passado. Em 2020, 31.980.146 declarações haviam sido enviadas dentro do prazo.",
      link: 'https://investnews.com.br/geral/5-fatos-para-hoje-declaracoes-do-ir-crescem-68-itausa-vai-investir-na-aegea/',
      image: 'https://investnews.com.br/wp-content/uploads/2021/04/imposto-400x240.png',
    },
    // { title: 'Prepare-se', 
    //   content: "Guarde um dinheiro, pense em planos futuros. Tenha objetivos isso irá leva-lo a busca-los. E principalmente nao desista, seus sonhos são apenas seus e voce é o unico que pode alcança-los."},
    //   link: ''
    //   image: ''
    // { title: 'Organização',   
    //   content: "Sempre tenha seus custos perto de voce e se organize, isso ira ajuda-lo sempre que precisar e nao esqueça parcelamentos ou dividas ativas elas precisam ser prioridades no momento pode aparecer como algo ruim mas seguindo as dicas alteriores elas nao irao aparecer."},
    //   link: ''
    //   image: ''
  ]
}

