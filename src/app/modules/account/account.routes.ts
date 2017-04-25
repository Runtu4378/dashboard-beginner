import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// 二级页面组件
import { AccountComponent } from './account.component';
import { SignInComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ResetComponent } from './pages/reset/reset.component';


const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      {
        path: '',
        redirectTo: 'signin',
      },
      {
        path: 'signin',
        component: SignInComponent,
        data: {
          title: 'Sign In'
        }
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: {
          title: 'Sign Up'
        }
      },
      {
        path: 'reset-pw',
        component: ResetComponent,
        data: {
          title: 'Reset Password'
        }
      }
    ]
  }
];

export const AccountRoutes: ModuleWithProviders = RouterModule.forChild(routes);


