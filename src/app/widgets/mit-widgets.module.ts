import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// 模块
import { MitLoadingModule } from './mit-loading/mit-loading.module';
import { MitUserBoxModule } from './mit-user-box/mit-user-box.module';
import { MitTaskBoxModule } from './mit-task-box/mit-task-box.module';
import { MitNotificationBoxModule } from './mit-notification-box/mit-notification-box.module';
import { MitLayoutModule } from './mit-layout/mit-layout.module';
import { MitTableModule } from './mit-table/mit-table.module';
import { MitBreadcrumbModule } from './mit-breadcrumb/mit-breadcrumb.module';
//import { MitTimePickerComponent } from './mit-time-picker/mit-time-picker.component';
let widgetsFnc = [
  MitLoadingModule,
  MitNotificationBoxModule,
  MitLayoutModule,
  MitUserBoxModule,
  MitTaskBoxModule,
  MitTableModule,
  MitBreadcrumbModule
];



@NgModule({
  declarations: [
    //MitTimePickerComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    ...widgetsFnc
  ],
  exports: []
})
export class MitWidgetsModule { };
