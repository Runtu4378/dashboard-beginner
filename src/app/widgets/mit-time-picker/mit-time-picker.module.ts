import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MitTimePickerComponent } from './mit-time-picker.component';
@NgModule({
  imports: [
    FormsModule,
    CommonModule,
  ],
  declarations: [MitTimePickerComponent],
  exports: [MitTimePickerComponent]
})
export class MitTimePickerModule { }
