import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MitBreadcrumbComponent } from './mit-breadcrumb.component';

let component = [
  MitBreadcrumbComponent,
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
export class MitBreadcrumbModule { }
