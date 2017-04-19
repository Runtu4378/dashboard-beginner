import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { AuthHttp } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';
import { Setting } from '../models/setting';
import { API_ENDPOINT_SETTINGS } from '../app.constants';


@Injectable()
export class SettingService {

  constructor(private http: Http, private authHttp: AuthHttp) {    
    
  }

  getSettings() {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    return this.http
      .get(API_ENDPOINT_SETTINGS, { headers: headers })
      .toPromise()
      .then(response => response.json() as Setting[])
      .catch(this.handleError);
  }

  saveSettings(setting: any) {
    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');

    return this.http
      .put(API_ENDPOINT_SETTINGS + setting.id, setting, { headers: headers })
      .toPromise()
      .then(response => response.json() as Setting)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
