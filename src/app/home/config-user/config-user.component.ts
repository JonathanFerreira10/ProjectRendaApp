import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavController, LoadingController, ToastController } from '@ionic/angular';
import { StorageService, Item } from '../../storage.service';

@Component({
  selector: 'app-config-user',
  templateUrl: './config-user.component.html',
  styleUrls: ['./config-user.component.scss'],
})
export class ConfigUserComponent implements OnInit {
  private loading;
   checkbox
  items: Item[] = [];
  newItem: Item = <Item>{};

  constructor(public modalController: ModalController, private navCtrl: NavController, private loadingCtrl: LoadingController, private storageService: StorageService) {
      this.loadItems();

   }

  ngOnInit() {}

  public image = "https://ionicframework.com/docs/demos/api/avatar/avatar.svg"

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





}
