import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarFaturaPageRoutingModule } from './cadastrar-fatura-routing.module';

import { CadastrarFaturaPage } from './cadastrar-fatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarFaturaPageRoutingModule
  ],
  declarations: [CadastrarFaturaPage]
})
export class CadastrarFaturaPageModule {}
