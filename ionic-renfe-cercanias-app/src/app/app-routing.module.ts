import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'profile',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'edit',
        loadChildren: () => import('./pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
      },
      {
        path: 'tickets',
        loadChildren: () => import('./pages/user-tickets/user-tickets.module').then(m => m.UserTicketsPageModule)
      },
      {
        path: 'recharge',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/recharge-user-renfe-card/recharge-user-renfe-card.module').then(m => m.RechargeUserRenfeCardPageModule)
          },
          {
            path: 'payment-method',
            loadChildren: () => import('./pages/select-payment-method/select-payment-method.module').then(m => m.SelectPaymentMethodPageModule)
          },
          {
            path: 'confirm',
            loadChildren: () => import('./pages/confirm-action/confirm-action.module').then(m => m.ConfirmActionPageModule)
          }
        ]
      },
      {
        path: 'default-station',
        loadChildren: () => import('./pages/select-default-station/select-default-station.module').then(m => m.SelectDefaultStationPageModule)
      }
    ]
  },
  {
    path: 'home',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'timings',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/train-timings/train-timings.module').then(m => m.TrainTimingsPageModule)
          },
          {
            path: 'route',
            loadChildren: () => import('./pages/train-route-info/train-route-info.module').then(m => m.TrainRouteInfoPageModule)
          }
        ]
      },
      {
        path: 'pets-and-cycles',
        loadChildren: () => import('./pages/travelling-pets-cycles/travelling-pets-cycles.module').then(m => m.TravellingPetsCyclesPageModule)
      },
      {
        path: 'train-lines',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/train-lines/train-lines.module').then(m => m.TrainLinesPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('./pages/train-line-details-page/train-line-details-page.module').then(m => m.TrainLineDetailsPagePageModule)
          }
        ]
      },
      {
        path: 'fares',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/fares/fares.module').then(m => m.FaresPageModule)
          },
          {
            path: ':id',
            loadChildren: () => import('./pages/fare-details/fare-details.module').then(m => m.FareDetailsPageModule)
          }
        ]
      },
      {
        path: 'customer-service',
        children: [
          {
            path: '',
            loadChildren: () => import('./pages/customer-service/customer-service.module').then(m => m.CustomerServicePageModule)
          },
          {
            path: 'contact-form',
            loadChildren: () => import('./pages/customer-service-contact-form/customer-service-contact-form.module').then(m => m.CustomerServiceContactFormPageModule)
          }
        ]
      }
    ]
  },
  {
    path: 'info',
    children: [
      {
        path: 'warning-list',
        loadChildren: () => import('./pages/info-warnings-list/info-warnings-list.module').then(m => m.InfoWarningsListPageModule)
      },
      {
        path: 'information-list',
        loadChildren: () => import('./pages/info-information-list/info-information-list.module').then(m => m.InfoInformationListPageModule)
      }
    ]
  },
  {
    path: 'qr-code-modal',
    loadChildren: () => import('./pages/qr-code-modal/qr-code-modal.module').then(m => m.QrCodeModalPageModule)
  },
  {
    path: 'ticket-qr-code-modal',
    loadChildren: () => import('./pages/ticket-qr-code-modal/ticket-qr-code-modal.module').then(m => m.TicketQrCodeModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
