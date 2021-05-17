import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController, ToastController } from '@ionic/angular';
import { StorageService, Item } from '../../../../app/storage.service';
import {Plugins, CameraResultType, CameraSource} from '@capacitor/core'

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  // Profile objects
  items: Item[] = [];
  newItem: Item = <Item>{};

  private loading;

  constructor(private storageService: StorageService, public modalController: ModalController, private navCtrl: NavController, private loadingCtrl: LoadingController, private toastController: ToastController) { }

  ngOnInit() {
    this.modalController.dismiss();
  }

  async close(){
    console.log("Modal Fechado")
   
    this.loadingCtrl.create({message: 'Loading...'}).then((overlay)=> {
      this.loading = overlay;
      this.loading.present();
    });

    setTimeout(() => {
      this.loading.dismiss(); 
      window.location.reload(); 
    },1500)
  }

  addItem(){
    this.newItem.modified = Date.now();
    this.newItem.id = Date.now();

    this.storageService.addItem(this.newItem).then(item => {
      this.newItem = <Item>{};
      this.showToast(`Usuário criado!`);
      this.loadItems();
    });
  }

  loadItems(){
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }

  public image = "https://ionicframework.com/docs/demos/api/avatar/avatar.svg"

  public async getPhoto(){
    const photo = await Plugins.Camera.getPhoto({
      resultType: CameraResultType.DataUrl
    });
    this.image = photo.dataUrl
  }
}
