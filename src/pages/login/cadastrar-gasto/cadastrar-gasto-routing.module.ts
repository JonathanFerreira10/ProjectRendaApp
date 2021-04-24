import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastrarGastoPage } from './cadastrar-gasto.page';

const routes: Routes = [
  {
    path: '',
    component: CadastrarGastoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrarGastoPageRoutingModule {}
