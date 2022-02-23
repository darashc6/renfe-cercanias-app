import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'qr-code-modal',
    loadChildren: () => import('./pages/qr-code-modal/qr-code-modal.module').then( m => m.QrCodeModalPageModule)
  },
  {
    path: 'station-details-travelling-pets-cycles',
    loadChildren: () => import('./pages/station-details-travelling-pets-cycles/station-details-travelling-pets-cycles.module').then( m => m.StationDetailsTravellingPetsCyclesPageModule)
  },
  {
    path: 'station-details-train-lines',
    loadChildren: () => import('./pages/station-details-train-lines/station-details-train-lines.module').then( m => m.StationDetailsTrainLinesPageModule)
  },
  {
    path: 'station-details-fares',
    loadChildren: () => import('./pages/station-details-fares/station-details-fares.module').then( m => m.StationDetailsFaresPageModule)
  },
  {
    path: 'station-details-customer-service',
    loadChildren: () => import('./pages/station-details-customer-service/station-details-customer-service.module').then( m => m.StationDetailsCustomerServicePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
