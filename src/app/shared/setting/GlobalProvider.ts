import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class GlobalProvider {
  // Observable sources
  private switchShowTabs = new Subject<string>();
  private switchSortTabs = new Subject<string>();
  private changeFilterString = new Subject<Object>();
  private changeNavigation = new Subject<Object>();
  private showAlert = new Subject<Object>();

  // Observable streams
  switchShowTabsAnnounced$ = this.switchShowTabs.asObservable();
  switchSortTabsAnnounced$ = this.switchSortTabs.asObservable();
  changeFilterStringAnnounced$ = this.changeFilterString.asObservable();
  changeNavigationAnnounced$ = this.changeNavigation.asObservable();
  showAlertAnnounced$ = this.showAlert.asObservable();

  // Service message commands
  announceShowTabSwitch(name: string) {
    this.switchShowTabs.next(name);
  }

  announceSortTabSwitch(name: string) {
    this.switchSortTabs.next(name);
  }

  announceChangeFilterString(text: string, filter: string) {
    this.changeFilterString.next({
      text: text,
      filter: filter
    });
  }

  announceChangeNavigation(page: string, enter: boolean) {
    this.changeNavigation.next({
      page: page,
      enter: enter
    });
  }

  announceShowAlert(alert: string, message: string) {
    this.showAlert.next({
      alert: alert,
      message: message
    });
  }
  
}