import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


 // component
import { MitNotificationBoxComponent } from './mit-notification-box.component';
let component = [
  MitNotificationBoxComponent
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
  ]
})
export class MitNotificationBoxModule { }
