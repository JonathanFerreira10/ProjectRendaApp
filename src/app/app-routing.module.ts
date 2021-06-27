import { isNgTemplate } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { StorageService, Item} from './storage.service'


const routes: Routes = [
  
  {
    path: 'home/:name',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'modal',
    loadChildren: () => import('../pages/login/Modals/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'coach',
    loadChildren: () => import('../pages/login/coach/coach.module').then( m => m.CoachPageModule)
  },
  {
    path: 'cadastrar-fatura', //Para puxar o nome do usuário deve ser usado /:name/cadastrar-fatura porém, precisa ser alterado na home a parte do redirecionamento. 
    loadChildren: () => import('../pages/login/cadastrar-fatura/cadastrar-fatura.module').then( m => m.CadastrarFaturaPageModule)
  },
  {
    path: 'cadastrar-gasto',
    loadChildren: () => import('../pages/login/cadastrar-gasto/cadastrar-gasto.module').then( m => m.CadastrarGastoPageModule)
  },
  {
    path: 'visualizar-fatura',
    loadChildren: () => import('../pages/login/visualizar-fatura/visualizar-fatura.module').then( m => m.VisualizarFaturaPageModule)
  },
  {
    path: 'edit-fatura',
    loadChildren: () => import('../pages/login/visualizar-fatura/edit-fatura/edit-fatura.module').then( m => m.EditFaturaPageModule)
  },
  {
    path: 'config-user',
    loadChildren: () => import('./home/config-user/config-user.module').then( m => m.ConfigUserPageModule)
  },
  {
    path: 'modal-voucher',
    loadChildren: () => import('../pages/login/visualizar-fatura/modal-voucher/modal-voucher.module').then( m => m.ModalVoucherPageModule)
  },



  







  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
