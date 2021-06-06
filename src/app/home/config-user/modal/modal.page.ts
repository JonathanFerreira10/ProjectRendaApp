import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController, ToastController } from '@ionic/angular';
import { StorageService, Item } from '../../../../app/storage.service';
import { PopoverController } from '@ionic/angular';
import {Plugins, CameraResultType, CameraSource} from '@capacitor/core'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  public profID

  // Profile objects
  items: Item[] = [];
  newItem: Item = <Item>{};

  private loading;

  constructor(private storageService: StorageService, public modalController: ModalController, private navCtrl: NavController, private loadingCtrl: LoadingController, private toastController: ToastController, public popoverController: PopoverController) { }

  ngOnInit() {
    this.modalController.dismiss();
  }

  async close(){
    const popover = this.popoverController
    popover.dismiss();
  }

  loadItems(){
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  delete(){
      // Limpando storage (items + invoices)
      this.storageService.clearStorage();
      window.location.href='/login';
      this.close();
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

}
