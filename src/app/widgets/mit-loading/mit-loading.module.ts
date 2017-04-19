import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

 // component
import { MitLoadingComponent } from './mit-loading.component';
let component = [
  MitLoadingComponent
];


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ...component
  ],
  exports: [
    ...component
  ]
})
export class MitLoadingModule { }
