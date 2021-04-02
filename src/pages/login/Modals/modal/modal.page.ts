import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
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

  constructor(private storageService: StorageService, public modalController: ModalController) { }

  ngOnInit() {
  }

  close(){
    console.log("Modal Fechado")
    window.location.reload();
    this.modalController.dismiss();
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
