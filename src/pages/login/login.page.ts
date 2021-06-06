import { Component, OnInit } from '@angular/core';
import { ModalController, Platform, NavController } from '@ionic/angular';
import { ModalPage } from './Modals/modal/modal.page';
import { StorageService, Item } from '../../app/storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  trackSign : boolean = true;

  // Profile objects
  items: Item[] = [];
  newItem: Item = <Item>{};


  constructor(private storageService: StorageService, public modalController: ModalController, private plt: Platform, private nav: NavController) { 
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
    // Validar se ja possui um usuário no storage, caso sim travar cadastro.
    this.storageService.getItems().then(items => {
      this.items = items;
      if(this.items.length >= 1){
        this.trackSign = false;
      }
    });
    // Obs: se não tiver nenhum usuário no storage, é comum o erro "this.items is null" mas ele não impede nada.
  }

  loadItems(){
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  // pushPage(){
  //   this.nav.navigateForward(`/home/${this.items[0].name}`);
  // }
}
