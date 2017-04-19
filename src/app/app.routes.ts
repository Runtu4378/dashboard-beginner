import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { MitLayoutComponent } from './widgets/mit-layout/mit-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/account/signin',
    pathMatch: 'full'
  },
  {
    path: 'page',
    component: MitLayoutComponent,
    children: [
    ]
  },
  { path: 'account', loadChildren: 'app/modules/account/account.module#AccountModule' },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
