import { Component, OnInit } from '@angular/core';
import { StorageService, Invoice, Item } from '../storage.service';
import { Platform, NavController, ModalController, IonItemSliding } from '@ionic/angular';

import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { ConfigUserPage } from './config-user/config-user.page'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  today;

  //public invoiceTotal = 0;
  //public saldoRestante = 0;

  username : string;

  invoices: Invoice[] = [];
  items: Item[] = [];
  newItem: Item = <Item>{};
  
  public options: Array<any> = [
    { name: 'Criar Fatura', url: "/cadastrar-fatura", icon: 'clipboard-outline'},
    { name: 'Visualizar Fatura', url: "/visualizar-fatura", icon: 'document-outline'},
    { name: 'Coach', url: "/coach", icon: 'newspaper-outline' },
    { name: 'Sair', url: "/login", icon: 'power' },
    // deixei somente "Coach" pois "Coach de Investimento" estava aumentando
    // o tamanho da caixa dele no slide.
  ];

  public slidesOptions: any = { slidesPerView: 3, freeModey: true};

  constructor(private storageService: StorageService, private plt: Platform, private nav: NavController, public modalController: ModalController) {
    // get data de hoje
    this.today = new Date().toISOString();

    this.plt.ready().then(() => {
      this.loadInvoices();
      this.loadItems();
    });
    
  }

  ngOnInit() {
    this.storageService.getItems().then(items => {
      this.items = items;
      this.username = this.items[0].name;
    });

    /*
    this.storageService.getInvoices().then(invoices => {
      this.invoices = invoices;
      for(let i = 0; i <= this.invoices.length; i++){
        this.storageService.getInvoices().then(invoices => {
          this.invoices = invoices;
          if(this.invoices[i].wasPaid == true){
            this.invoiceTotal = this.invoiceTotal + this.invoices[i].value;
            console.log(this.invoiceTotal);
          }
        });
      }
    });
    */
    
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
  

  async showModal(){
    console.log("Modal aberto")
    const modal = await this.modalController.create({
    component: ConfigUserPage
    });
    modal.present();
  }

}



