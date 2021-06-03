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

}

