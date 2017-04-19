import { Component,OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationCancel, NavigationError, ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  toastOptions: Object = {
    position: [ 'bottom', 'right' ],
    timeOut: 3000,
    lastOnBottom: true
  };

  constructor( private router: Router, private activatedRoute: ActivatedRoute) {

  }


  ngOnInit() {
  }

}
