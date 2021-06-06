import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfigUserPageRoutingModule } from './config-user-routing.module';

import { ConfigUserPage } from './config-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfigUserPageRoutingModule
  ],
  declarations: [ConfigUserPage]
})
export class ConfigUserPageModule {}
