import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

export interface Item {
  id: number,
  name: string,
  imag: string,
  modified: number,
  income: number
}

export interface Invoice {
  id: number,
  title: string,
  value: number,
  modified: number,
  wasPaid: boolean,
  monthly: boolean,
  renewalDay: number,
  paymentDate: number,
  dueDate: number
}

// criar interface para compras simples

const ITEMS_KEY = "my-items";
const INVC_KEY = "my-invoices";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  // criando o storage
  constructor(private storage: Storage) { 
    this.init();
  }

  // iniciando o storage
  async init() {
    const storage = await this.storage.create();
    this.storage = storage;
  }

  // CREATE
  addItem(item: Item): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if(items){
        items.push(item);
        return this.storage.set(ITEMS_KEY, items);
      }else{
        return this.storage.set(ITEMS_KEY, [item]);
      }
    });
  }

  addInvoice(invoice: Invoice): Promise<any>{
    return this.storage.get(INVC_KEY).then((invoices: Invoice[]) => {
      if(invoices){
        invoices.push(invoice);
        return this.storage.set(INVC_KEY, invoices);
      }else{
        return this.storage.set(INVC_KEY, [invoice]);
      }
    });
  }

  // READ
  getItems(): Promise<Item[]>{
    return this.storage.get(ITEMS_KEY);
  }

  getInvoices(): Promise<Invoice[]>{
    return this.storage.get(INVC_KEY);
  }

  // UPDATE
  updateItem(item: Item): Promise<any>{
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if(!items || items.length === 0){
        return null;
      }

      let newItems: Item[] = [];

      for(let i of items){
        if (i.id === item.id){
          newItems.push(item);
        }else{
          newItems.push(i);
        }
      }

      return this.storage.set(ITEMS_KEY, newItems);
    });
  }

  updateInvoice(invoice: Invoice): Promise<any>{
    return this.storage.get(INVC_KEY).then((invoices: Invoice[]) => {
      if(!invoices || invoices.length === 0){
        return null;
      }

      let newInv: Invoice[] = [];

      for(let i of invoices){
        if (i.id === invoice.id){
          newInv.push(invoice);
        }else{
          newInv.push(i);
        }
      }

      return this.storage.set(INVC_KEY, newInv);
    });
  }

  // DELETE
  deleteItem(id: number): Promise<Item>{
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if(!items || items.length == 0){
        return null;
      }

      let toKeep: Item[] = [];

      for(let i of items){
        if(i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }

  deleteInvoice(id: number): Promise<Invoice>{
    return this.storage.get(INVC_KEY).then((invoices: Invoice[]) => {
      if(!invoices || invoices.length == 0){
        return null;
      }

      let toKeep: Invoice[] = [];

      for(let i of invoices){
        if(i.id !== id){
          toKeep.push(i);
        }
      }
      return this.storage.set(INVC_KEY, toKeep);
    });
  }

  clearStorage(): Promise<any>{
    return this.storage.clear();
  }

}
