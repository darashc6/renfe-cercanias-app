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
            loadChildren: () => import('../recharge-user-renfe-card/recharge-user-renfe-card.module').then(m => m.RechargeUserRenfeCardPageModule)
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
            path: 'pets-and-cycles',
            loadChildren: () => import('../station-details-travelling-pets-cycles/station-details-travelling-pets-cycles.module').then(m => m.StationDetailsTravellingPetsCyclesPageModule)
          },
          {
            path: 'train-lines',
            loadChildren: () => import('../station-details-train-lines/station-details-train-lines.module').then(m => m.StationDetailsTrainLinesPageModule)
          },
          {
            path: 'fares',
            loadChildren: () => import('../station-details-fares/station-details-fares.module').then(m => m.StationDetailsFaresPageModule)
          },
          {
            path: 'customer-service',
            loadChildren: () => import('../station-details-customer-service/station-details-customer-service.module').then(m => m.StationDetailsCustomerServicePageModule)
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
            loadChildren: () => import('../info-warnings-list/info-warnings-list.module').then( m => m.InfoWarningsListPageModule)
          },
          {
            path: 'information-list',
            loadChildren: () => import('../info-information-list/info-information-list.module').then(m => m.InfoInformationListPageModule)
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: '/app/profile',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
