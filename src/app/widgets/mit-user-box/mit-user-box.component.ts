import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../modules/account/services/account.service';

@Component({
  selector: 'app-mit-user-box',
  templateUrl: './mit-user-box.component.html',
  styleUrls: ['./mit-user-box.component.scss'],
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
export class MitUserBoxComponent implements OnInit {
  account: Object = { username: 'anonymous' };
  isCollapsed = true;
  isExpand: boolean = false;  // 展开待办事项列表
  constructor(private _eref: ElementRef, private router: Router, private act: AccountService) { }

  ngOnInit() {
    if (localStorage.getItem('account'))
      this.account = JSON.parse(localStorage.getItem('account'));
  }

  signOut() {
    this.act.signOut().subscribe((res) => {
      localStorage.removeItem('account');
      this.router.navigateByUrl('/account/signin');
    });
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
