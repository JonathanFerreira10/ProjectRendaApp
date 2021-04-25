import { Component, OnInit } from '@angular/core';
import { StorageService, Invoice} from '../../../app/storage.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-visualizar-fatura',
  templateUrl: './visualizar-fatura.page.html',
  styleUrls: ['./visualizar-fatura.page.scss'],
})


export class VisualizarFaturaPage implements OnInit {
  invoices: Invoice[] = [];
  newInv: Invoice = <Invoice>{};
  
  constructor(private storageService: StorageService, private storage: Storage) { 
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
  
  }

