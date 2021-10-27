import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VisualizarFaturaPage } from './visualizar-fatura.page';

const routes: Routes = [
  {
    path: '',
    component: VisualizarFaturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VisualizarFaturaPageRoutingModule {}
