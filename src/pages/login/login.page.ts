import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from './Modals/modal/modal.page';




@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public modalController: ModalController) { }

  async showModal(){
    console.log("Modal aberto")
    const modal = await this.modalController.create({
    component: ModalPage
    });
    modal.present();
  }

  ngOnInit() {
  }

}
