import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { ModalPage } from './Modals/modal/modal.page';
import { StorageService, Item } from '../../app/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Profile objects
  items: Item[] = [];
  newItem: Item = <Item>{};

  constructor(private storageService: StorageService, public modalController: ModalController, private plt: Platform) { 
    this.plt.ready().then(() => {
      this.loadItems();
    })
  }

  async showModal(){
    console.log("Modal aberto")
    const modal = await this.modalController.create({
    component: ModalPage
    });
    modal.present();
  }

  ngOnInit() {
  }

  loadItems(){
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }
}
