import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


 // component
import { MitTaskBoxComponent } from './mit-task-box.component';
let component = [
  MitTaskBoxComponent
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
export class MitTaskBoxModule { }
