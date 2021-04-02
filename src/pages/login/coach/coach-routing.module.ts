import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachPage } from './coach.page';

const routes: Routes = [
  {
    path: '',
    component: CoachPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachPageRoutingModule {}
