import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditFaturaPageRoutingModule } from './edit-fatura-routing.module';

import { EditFaturaPage } from './edit-fatura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditFaturaPageRoutingModule
  ],
  declarations: [EditFaturaPage]
})
export class EditFaturaPageModule {}
