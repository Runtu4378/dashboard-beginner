import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-mit-task-box',
  templateUrl: './mit-task-box.component.html',
  styleUrls: ['./mit-task-box.component.scss'],
  animations: [
    trigger('dropdown', [
      state('in', style({ height: 0, opacity: 0 })),
      transition('void => *', [
        style({ height: 0 }),
        animate(150, style({ height: '*', opacity: 1 }))
      ]),
      transition('* => void', [
        style({ height: 0 }),
        animate(150, style({ height: 0, opacity: 0 }))
      ])
    ])
  ]
})
export class MitTaskBoxComponent implements OnInit {
  public isExpand: boolean = false;  // 展开待办事项列表
  public isListCollapse: boolean = false;  // 列表全部展开判断

  constructor(private _eref: ElementRef) { }

  ngOnInit() {
  }



  // 监听全局点击事件 *用于隐藏下拉菜单
  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this._eref.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.isExpand = false;
    }
  }

}
