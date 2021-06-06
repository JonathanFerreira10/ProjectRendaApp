import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController, ToastController } from '@ionic/angular';
import { StorageService, Item } from '../../storage.service'
import {Plugins, CameraResultType, CameraSource} from '@capacitor/core'

@Component({
  selector: 'app-config-user',
  templateUrl: './config-user.page.html',
  styleUrls: ['./config-user.page.scss'],
})
export class ConfigUserPage implements OnInit {
  items: Item[] = [];
  newItem: Item = <Item>{};
  private loading;
  checkbox



  constructor(private storageService: StorageService, public modalController: ModalController, private navCtrl: NavController, private loadingCtrl: LoadingController) {
    this.loadItems();
   }

  ngOnInit() {
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

  loadItems(){
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  async salvarAlteracoes(){
    this.items[0].name = this.newItem.name //Alterar nome
    this.items[0].income = this.newItem.income //Alterar Renda
    this.storageService.updateItem(this.items[0])
    console.log(this.newItem.name)
  }

  public async getPhoto(){
    const photo = await Plugins.Camera.getPhoto({
      resultType: CameraResultType.DataUrl
    });
    this.newItem.imag = photo.dataUrl
    this.items[0].imag = this.newItem.imag
    this.storageService.updateItem(this.items[0])
    console.log(this.items)
  }

  // delConta(id: number){
  //   this.storageService.deleteItem(id)
  // }

}
