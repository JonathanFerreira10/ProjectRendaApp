import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarFaturaPage } from './cadastrar-fatura.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarFaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarFaturaPageRoutingModule {}
