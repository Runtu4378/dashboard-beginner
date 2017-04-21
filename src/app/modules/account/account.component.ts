import { Component, OnInit } from '@angular/core';

// 引入动画效果
import { fadeIn } from '../../animation/fadeIn';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  animations: [ fadeIn ]
})
export class AccountComponent implements OnInit {

  glassShow: string;

  constructor() { }

  ngOnInit() {
    this.glassShow = 'show'
  }

}
