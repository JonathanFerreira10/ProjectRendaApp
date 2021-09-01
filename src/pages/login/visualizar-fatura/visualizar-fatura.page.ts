import { Component, OnInit } from '@angular/core';
import { StorageService, Invoice, Item} from '../../../app/storage.service';
import { Storage } from '@ionic/storage-angular';
import { PopoverController } from '@ionic/angular';
import { HelpVisualizarFaturaComponent } from './help-visualizar-fatura/help-visualizar-fatura.component'
import { ModalController, Platform, NavController } from '@ionic/angular';
import { EditFaturaPage } from './edit-fatura/edit-fatura.page'
import { ActivatedRoute } from '@angular/router';
import {Plugins, CameraResultType, CameraSource} from '@capacitor/core'
import { ModalVoucherPage } from './modal-voucher/modal-voucher.page'
import { ConnectionAPIService } from '../../../app/connection-api.service'


@Component({
  selector: 'app-visualizar-fatura',
  templateUrl: './visualizar-fatura.page.html',
  styleUrls: ['./visualizar-fatura.page.scss'],
})

export class VisualizarFaturaPage implements OnInit {
  today
  public image = ""
  invoices: Invoice[] = [];
  newInv: Invoice = <Invoice>{};
  newItem: Item = <Item>{};

  items: Item[] = [];

  public invoicess
  
  constructor(
    private storageService: StorageService, 
    private storage: Storage, 
    public popoverController: PopoverController, 
    public modalController: ModalController, 
    private plt: Platform, 
    private nav: NavController,
    route: ActivatedRoute, 
    private connectionAPI: ConnectionAPIService
    ) {
    // get data de hoje
    this.today = new Date().toISOString();
    this.loadInvoices();
    this.loadItems();
  }

  ngOnInit() {
    console.log("/visualizar-fatura");
  }


  loadInvoices(){
    this.storageService.getInvoices().then(invoices => {
      this.invoices = invoices;
    });
  }

  loadItems(){
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  deleteInvoice(idx){
      this.storageService.deleteInvoice(this.invoices[idx].id).then(invoice => {
      this.loadInvoices()
    })
  }

  shareIndex(idx){
    this.storageService.setSharedIdx(idx);
  }

  pago(idx){
    this.invoices[idx].wasPaid = true;
    this.storageService.updateInvoice(this.invoices[idx])
    const data = `
      {
        "valueInvoice":${this.invoices[idx].value}, 
        "income":${this.items[0].income}
      }
    `;
    const API = JSON.parse(data)

    this.connectionAPI.post(API).subscribe(dados => {
      console.log("Sucesso!", dados)
      this.items[0].income = dados['total']
      this.storageService.updateItem(this.items[0])
    }, err => {
      console.log("Erro", err)
    });
  }

  async voucher(idx){
    const photo = await Plugins.Camera.getPhoto({
      resultType: CameraResultType.DataUrl,
    });
    this.image = photo.dataUrl
    this.newInv.voucher = this.image
    this.invoices[idx].voucher = this.newInv.voucher
    this.storageService.updateInvoice(this.invoices[idx])
  }

 async showModalVoucher(){
   console.log("Modal aberto")
   const modal = await this.modalController.create({
    component: ModalVoucherPage
    });
    modal.present();
  }

// async presentPopoverVoucher(ev: any) {
//   const popover = await this.popoverController.create({
//     component: ModalVoucherPage,
//     cssClass: './help-visualizar-fatura.component.scss',
//     event: ev,
//     translucent: true
//   });
//   await popover.present();

//   const { role } = await popover.onDidDismiss();
//   console.log('onDidDismiss resolved with role', role);
// }

  goToHome(){
    this.storageService.getItems().then(items => {
      this.items = items;

      // sempre retorna para home do index 0, caso tenha mais usuarios deve ser tratado.
      window.location.href=`/home/${this.items[0].name}`;
    });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: HelpVisualizarFaturaComponent,
      cssClass: './help-visualizar-fatura.component.scss',
      event: ev,
      translucent: true
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  // Caso não queiram redirecionar para uma página de edição, da para fazer com modal
  // async showModal(){
  //   console.log("Modal aberto")
  //   const modal = await this.modalController.create({
  //   component: EditFaturaPage
  //   });
  //   modal.present();
  // }
  
  }

