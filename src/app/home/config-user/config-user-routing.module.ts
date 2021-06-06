import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfigUserPage } from './config-user.page';

const routes: Routes = [
  {
    path: '',
    component: ConfigUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfigUserPageRoutingModule {}
