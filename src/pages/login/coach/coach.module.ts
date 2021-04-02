import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachPageRoutingModule } from './coach-routing.module';

import { CoachPage } from './coach.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachPageRoutingModule
  ],
  declarations: [CoachPage]
})
export class CoachPageModule {}
