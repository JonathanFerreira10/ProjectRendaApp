import { Component, OnInit } from '@angular/core';
import { StorageService, Invoice, Item} from '../../../../app/storage.service'
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-modal-voucher',
  templateUrl: './modal-voucher.page.html',
  styleUrls: ['./modal-voucher.page.scss'],
})
export class ModalVoucherPage implements OnInit {
  invoices: Invoice[] = [];
  newInv: Invoice = <Invoice>{};

  constructor(private storageService: StorageService, private storage: Storage) {
    this.loadInvoices()
   }

  ngOnInit() {
  }

  loadInvoices(){
    this.storageService.getInvoices().then(invoices => {
      this.invoices = invoices;
    });
  }
}
