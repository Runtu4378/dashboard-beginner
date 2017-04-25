import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutes } from './account.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'angular2-ui-switch'

//
import { MitLoadingModule } from '../../widgets/mit-loading/mit-loading.module';
let module = [
  MitLoadingModule
];


//
import { AccountComponent } from './account.component';
import { SignInComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ResetComponent } from './pages/reset/reset.component';


let page = [
  AccountComponent,
  SignInComponent,
  SignupComponent,
  ResetComponent
];


//
import { AccountService } from './services/account.service';


@NgModule({
  declarations: [
    ...page
  ],
  imports: [
    ...module,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    UiSwitchModule,
    AccountRoutes
  ],
  providers: [AccountService]
})
export class AccountModule { };
