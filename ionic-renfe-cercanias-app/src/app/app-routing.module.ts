import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'qr-code-modal',
    loadChildren: () => import('./pages/qr-code-modal/qr-code-modal.module').then(m => m.QrCodeModalPageModule)
  },  {
    path: 'customer-service-contact-form',
    loadChildren: () => import('./pages/customer-service-contact-form/customer-service-contact-form.module').then( m => m.CustomerServiceContactFormPageModule)
  },
  {
    path: 'ticket-qr-code-modal',
    loadChildren: () => import('./pages/ticket-qr-code-modal/ticket-qr-code-modal.module').then( m => m.TicketQrCodeModalPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
