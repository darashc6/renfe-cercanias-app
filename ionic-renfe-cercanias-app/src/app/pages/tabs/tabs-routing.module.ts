import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'app',
    component: TabsPage,
    children: [
      {
        path: 'profile',
        children: [
          {
            path: '',
            loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
          },
          {
            path: 'edit',
            loadChildren: () => import('../edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
          },
          {
            path: 'tickets',
            loadChildren: () => import('../user-tickets/user-tickets.module').then(m => m.UserTicketsPageModule)
          },
          {
            path: 'recharge',
            children: [
              {
                path: '',
                loadChildren: () => import('../recharge-user-renfe-card/recharge-user-renfe-card.module').then(m => m.RechargeUserRenfeCardPageModule)
              },
              {
                path: 'payment-method',
                loadChildren: () => import('../select-payment-method/select-payment-method.module').then(m => m.SelectPaymentMethodPageModule)
              },
              {
                path: 'confirm',
                loadChildren: () => import('../confirm-action/confirm-action.module').then(m => m.ConfirmActionPageModule)
              }
            ]
          },
          {
            path: 'default-station',
            loadChildren: () => import('../select-default-station/select-default-station.module').then(m => m.SelectDefaultStationPageModule)
          }
        ]
      },
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
          },
          {
            path: 'timings',
            children: [
              {
                path: '',
                loadChildren: () => import('../train-timings/train-timings.module').then(m => m.TrainTimingsPageModule)
              },
              {
                path: 'route',
                loadChildren: () => import('../train-route-info/train-route-info.module').then(m => m.TrainRouteInfoPageModule)
              }
            ]
          },
          {
            path: 'pets-and-cycles',
            loadChildren: () => import('../travelling-pets-cycles/travelling-pets-cycles.module').then(m => m.TravellingPetsCyclesPageModule)
          },
          {
            path: 'train-lines',
            children: [
              {
                path: '',
                loadChildren: () => import('../train-lines/train-lines.module').then(m => m.TrainLinesPageModule)
              },
              {
                path: ':id',
                loadChildren: () => import('../train-line-details-page/train-line-details-page.module').then(m => m.TrainLineDetailsPagePageModule)
              }
            ]
          },
          {
            path: 'fares',
            children: [
              {
                path: '',
                loadChildren: () => import('../fares/fares.module').then(m => m.FaresPageModule)
              },
              {
                path: ':id',
                loadChildren: () => import('../fare-details/fare-details.module').then(m => m.FareDetailsPageModule)
              }
            ]
          },
          {
            path: 'customer-service',
            children: [
              {
                path: '',
                loadChildren: () => import('../customer-service/customer-service.module').then(m => m.CustomerServicePageModule)
              },
              {
                path: 'contact-form',
                loadChildren: () => import('../customer-service-contact-form/customer-service-contact-form.module').then(m => m.CustomerServiceContactFormPageModule)
              }
            ]
          }
        ]
      },
      {
        path: 'info',
        children: [
          {
            path: '',
            loadChildren: () => import('../info/info.module').then(m => m.InfoPageModule)
          },
          {
            path: 'warning-list',
            loadChildren: () => import('../info-warnings-list/info-warnings-list.module').then(m => m.InfoWarningsListPageModule)
          },
          {
            path: 'information-list',
            loadChildren: () => import('../info-information-list/info-information-list.module').then(m => m.InfoInformationListPageModule)
          }
        ]
      },
    ]
  },
  {
    path: '',
    redirectTo: '/app/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
