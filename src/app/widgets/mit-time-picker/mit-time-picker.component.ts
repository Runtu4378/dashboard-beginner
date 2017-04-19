import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mit-time-picker',
  templateUrl: './mit-time-picker.component.html',
  styleUrls: ['./mit-time-picker.component.scss']
})
export class MitTimePickerComponent implements OnInit {
  @Output() result = new EventEmitter;

  hour: number = 0;
  minute: number = 0;
  time: string = 'AM';
  constructor() { }

  ngOnInit() {
  }

  change(hour, minute, time) {
    this.result.emit(hour + ':' + minute + ' ' + time);
  }

}
