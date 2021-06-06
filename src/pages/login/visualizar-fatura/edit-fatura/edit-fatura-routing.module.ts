import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditFaturaPage } from './edit-fatura.page';

const routes: Routes = [
  {
    path: '',
    component: EditFaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditFaturaPageRoutingModule {}
