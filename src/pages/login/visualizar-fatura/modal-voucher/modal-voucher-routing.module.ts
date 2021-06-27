import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalVoucherPage } from './modal-voucher.page';

const routes: Routes = [
  {
    path: '',
    component: ModalVoucherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalVoucherPageRoutingModule {}
