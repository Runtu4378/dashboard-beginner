import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ActivatedRouteSnapshot, UrlSegment } from '@angular/router';
import 'rxjs/add/operator/filter';


@Component({
  selector: 'app-mit-breadcrumb',
  templateUrl: './mit-breadcrumb.component.html',
  styleUrls: ['./mit-breadcrumb.component.scss']
})
export class MitBreadcrumbComponent implements OnInit {

  breadcrumbs: { name: string; url: string }[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      this.breadcrumbs = [];
      this.parseRoute(this.router.routerState.snapshot.root);
    });
  }

  parseRoute(node: ActivatedRouteSnapshot) {
    if (node.data['title']) {
      let urlSegments: UrlSegment[] = [];
      node.pathFromRoot.forEach(routerState => {
        urlSegments = urlSegments.concat(routerState.url);
      });
      let url = urlSegments.map(urlSegment => {
        return urlSegment.path;
      }).join('/');
      this.breadcrumbs.push({
        name: node.data['title'],
        url: '/' + url
      });
    } else if (!node.url.length && !node.data['title']) {
      // 首页重定向特殊处理
      this.breadcrumbs = [];
      this.breadcrumbs.push({
        name: 'Dashboard',
        url: '/'
      });
    }
    if (node.firstChild) {
      this.parseRoute(node.firstChild);
    }


    // 路径为空时特殊处理
    if (this.breadcrumbs.length === 1){
       this.breadcrumbs.push({
        name: 'Dashboard',
        url: '/'
      });
    }

  }
}
