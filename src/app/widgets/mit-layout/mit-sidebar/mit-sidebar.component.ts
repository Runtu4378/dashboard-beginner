import { Component, OnInit, Input, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
  selector: 'app-mit-sidebar',
  templateUrl: './mit-sidebar.component.html',
  styleUrls: [ './mit-sidebar.component.scss' ],
  animations: [
    trigger( 'sliderToggle', [
      state( 'in', style( { height: 0, opacity: 0 }) ),
      transition( 'void => *', [
        style( { height: 0 }),
        animate( 200, style( { height: '*', opacity: 1 }) )
      ] ),
      transition( '* => void', [
        style( { height: 0 }),
        animate( 200, style( { height: 0, opacity: 0 }) )
      ] )
    ] )
  ]
})
export class MitSidebarComponent implements OnInit {

  @Input() isExpand: boolean;

  toggleLink: string;

  toggleSubLink: string;

  current_url: string;

 private links: Array<any> = [
    {
      'title': 'DEVICE',
      'icon': 'icon-mianban',
      'link': ['/page/device/dashboard']
    },
    {
      'title': 'TEST',
      'icon': 'icon-daima',
      'link': ['/page/led']
    },
    {
      'title': 'DEVICE LIST',
      'icon': 'icon-kaifa',
      'link': ['/page/device-list']
    }



  ];

  constructor( public router: Router ) {

  }

  ngOnInit() {
    // 获取当前URL
    this.router.events.subscribe(( evt ) => {
      this.current_url = evt.url;
      this.isExpend( evt.url );
    });
  }


  // 遍历数组查找与当前URL对应的子项并展开
  isExpend( current_url ) {
    this.links.forEach(( item, key ) => {
      // 一级菜单
      if ( !item.sublinks && item.link === current_url ) {
        this.toggleLink = item.title;
      } else if ( item.sublinks ) {

        // 二级菜单
        item.sublinks.forEach(( subItem, subKey ) => {
          if ( subItem.link === current_url ) {
            this.toggleLink = item.title;
          }

          // 三级菜单
          if ( subItem.sublinks ) {
            subItem.sublinks.forEach(( threeItem, threeKey ) => {
              if ( threeItem.link === current_url ) {
                this.toggleLink = item.title;
                this.toggleSubLink = subItem.title;
              }
            });
          }
        });
      }
    });
  }

  // 菜单Toggle 通过菜单Title来判断
  onToggle( title ) {
    if ( title !== this.toggleLink ) {
      this.toggleLink = title;
    } else {
      this.toggleLink = undefined;
    }
  }

  onSubToggle( title ) {
    if ( title !== this.toggleSubLink ) {
      this.toggleSubLink = title;
    } else {
      this.toggleSubLink = undefined;
    }
  }

}
