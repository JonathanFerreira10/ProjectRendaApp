import { Component, OnInit } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';
import { StorageService, Invoice, Item } from '../../../app/storage.service';

@Component({
  selector: 'app-cadastrar-fatura',
  templateUrl: './cadastrar-fatura.page.html',
  styleUrls: ['./cadastrar-fatura.page.scss'],
})
export class CadastrarFaturaPage implements OnInit {
  today;

  // Profile objects
  items: Item[] = [];
  newItem: Item = <Item>{};

  // Invoice objects
  invoices: Invoice[] = [];
  newInv: Invoice = <Invoice>{};

  constructor(private storageService: StorageService, private plt: Platform, private toastController: ToastController) {
    // get data de hoje
    this.today = new Date().toISOString();

    this.plt.ready().then(() => {
      this.loadInvoices();
      this.loadItems();
    })
  }

  ngOnInit() {
    console.log("/cadastrar-fatura");
  }

  addInvoice(){
    this.newInv.modified = Date.now();
    this.newInv.id = Date.now();

    this.storageService.addInvoice(this.newInv).then(invoice => {
      this.newInv = <Invoice>{};
      this.showToast('Fatura adicionada!');
      this.loadInvoices();
    });
  }

  loadInvoices(){
    this.storageService.getInvoices().then(invoices => {
      this.invoices = invoices;
    });
  }

  // Para o funcionamento do cancel() é preciso carregar os profiles (items),
  // uma vez que o path "home" está definido como "/home:name".

  loadItems(){
    this.storageService.getItems().then(items => {
      this.items = items;
    });
  }

  cancel(){
    window.location.replace(`/home/${this.items[0].name}`);
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
}
