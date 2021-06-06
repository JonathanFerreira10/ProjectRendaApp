import { Component, OnInit } from '@angular/core';
import { StorageService, Invoice} from '../../../../app/storage.service';

@Component({
  selector: 'app-edit-fatura',
  templateUrl: './edit-fatura.page.html',
  styleUrls: ['./edit-fatura.page.scss'],
})
export class EditFaturaPage implements OnInit {
  public sharedIdx;

  invoices: Invoice[] = [];
  newInv: Invoice = <Invoice>{}


  constructor(private storageService: StorageService) {
    this.loadInvoices();
   }

  ngOnInit() {
    this.sharedIdx = this.storageService.getSharedIdx();
    console.log(this.sharedIdx);
  }

  loadInvoices(){
    this.storageService.getInvoices().then(invoices => {
      this.invoices = invoices;
    });
  }

  teste(){
    console.log(this.sharedIdx);
  }

}
