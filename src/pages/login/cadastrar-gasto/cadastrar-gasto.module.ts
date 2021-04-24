import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastrarGastoPageRoutingModule } from './cadastrar-gasto-routing.module';

import { CadastrarGastoPage } from './cadastrar-gasto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastrarGastoPageRoutingModule
  ],
  declarations: [CadastrarGastoPage]
})
export class CadastrarGastoPageModule {}
