import { Component, OnInit } from '@angular/core';
import { ModalController, NavController, LoadingController } from '@ionic/angular';
import { StorageService, Item } from '../../../../app/storage.service';

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

  constructor(private storageService: StorageService, public modalController: ModalController, private navCtrl: NavController, private loadingCtrl: LoadingController) { }

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
      this.loadItems();
    });
  }

  loadItems(){
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

}
