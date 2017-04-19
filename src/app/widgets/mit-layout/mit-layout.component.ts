import { Component, OnInit, HostListener } from '@angular/core';

@Component( {
  selector: 'app-mit-layout',
  templateUrl: './mit-layout.component.html',
  styleUrls: [ './mit-layout.component.scss' ]
})
export class MitLayoutComponent implements OnInit {

  expand: boolean = false;  // 是否展开的断只值

  sidebar: boolean;

  constructor() { }

  ngOnInit() {
    this.initWidth();  // 初始化宽度
  }

  toggleEvt() {
    this.expand = !this.expand;
  }


  // 获取初始化窗口大小
  initWidth() {
    const firstWidth = window.innerWidth;
    if ( firstWidth >= 768 ) {
      this.expand = false;
    }
  }


}
