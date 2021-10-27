import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizarFaturaPageRoutingModule } from './visualizar-fatura-routing.module';

import { VisualizarFaturaPage } from './visualizar-fatura.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizarFaturaPageRoutingModule
  ],
  declarations: [VisualizarFaturaPage]
})
export class VisualizarFaturaPageModule {}
