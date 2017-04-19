// auth: by Junchao Zheng
// date:  2016.12.21
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// 服务
import { MitDataTableService } from './mit-data-table.service';


// 页面
import { MitDataTableComponent } from './mit-data-table.component';
import { MitDataTablePaginationComponent } from './mit-data-table-pagination/mit-data-table-pagination.component';
let tablePage = [
  MitDataTableComponent,
  MitDataTablePaginationComponent
];

@NgModule( {
  declarations: [
    ...tablePage
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MitDataTableComponent,
    MitDataTablePaginationComponent
  ],
  providers: [ MitDataTableService ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MitDataTableModule { }
