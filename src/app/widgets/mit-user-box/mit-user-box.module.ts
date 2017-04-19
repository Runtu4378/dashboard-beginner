import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {AccountService} from '../../modules/account/services/account.service';
 // component
import { MitUserBoxComponent } from './mit-user-box.component';
let component = [
  MitUserBoxComponent
];


@NgModule({
  imports: [
    RouterModule,
    CommonModule
  ],
  declarations: [
    ...component
  ],
  exports: [
    ...component
  ],
  providers: [
    AccountService
  ]
})
export class MitUserBoxModule { }
