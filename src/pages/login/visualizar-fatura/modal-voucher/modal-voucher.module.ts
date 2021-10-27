import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalVoucherPageRoutingModule } from './modal-voucher-routing.module';

import { ModalVoucherPage } from './modal-voucher.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalVoucherPageRoutingModule
  ],
  declarations: [ModalVoucherPage]
})
export class ModalVoucherPageModule {}
