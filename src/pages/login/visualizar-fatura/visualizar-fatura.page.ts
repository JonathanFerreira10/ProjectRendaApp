import { Component, OnInit } from '@angular/core';
import { StorageService, Invoice} from '../../../app/storage.service';
import { Storage } from '@ionic/storage-angular';
import { PopoverController } from '@ionic/angular';
import { HelpVisualizarFaturaComponent } from './help-visualizar-fatura/help-visualizar-fatura.component'
import { ModalController, Platform, NavController } from '@ionic/angular';
import { EditFaturaPage } from './edit-fatura/edit-fatura.page'
import { ActivatedRoute } from '@angular/router';




@Component({
  selector: 'app-visualizar-fatura',
  templateUrl: './visualizar-fatura.page.html',
  styleUrls: ['./visualizar-fatura.page.scss'],
})


export class VisualizarFaturaPage implements OnInit {
  today

  invoices: Invoice[] = [];
  newInv: Invoice = <Invoice>{};

  public invoicess
  
  constructor(private storageService: StorageService, private storage: Storage, public popoverController: PopoverController, public modalController: ModalController, private plt: Platform, private nav: NavController, route: ActivatedRoute) {
    // get data de hoje
    this.today = new Date().toISOString();
    this.loadInvoices();
  }

  ngOnInit() {
    
  }

  loadInvoices(){
    this.storageService.getInvoices().then(invoices => {
      this.invoices = invoices;
    });
  }

  deleteInvoicee(){
    this.storageService.deleteInvoice(this.invoices.pop().id).then(invoice => {
      window.console.log("Removido")
      this.loadInvoices()
    })
  }
  //Considerar o ID para atualizar as demais faturas.
  pago(){
    this.invoices[0].wasPaid = true;
    this.storageService.updateInvoice(this.invoices[0])
    console.log(this.invoices[0].wasPaid)
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

