// auth: by Junchao Zheng
// date:  2016.12.17


import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';


@Injectable()
export class AuthService {
  headers: any;
  options: any;
  constructor(private http: Http) { }

  get(url?: string) {
    this.getToken();
    return this.http.get(url, this.options).map(res => res.json()).catch(this.handleError);
  }

  put(url?: string, form?: any) {
    this.getToken();
    return this.http.put(url, form, this.options).map(res => res.json()).catch(this.handleError);
  }

  post(url?: string, form?: any) {
    this.getToken();
    return this.http.post(url, form, this.options).map(res => res.json()).catch(this.handleError);
  }

  delete(url?: string) {
    this.getToken();
    return this.http.delete(url, this.options).map(res => res.json()).catch(this.handleError);
  }


  //获取TOKEN
  getToken() {
    if (localStorage.getItem('account') && JSON.parse(localStorage.getItem('account')).loginToken !== undefined) {

      this.headers = new Headers({ 'Content-Type': ' application/json', 'Authorization': 'bearer ' + JSON.parse(localStorage.getItem('account')).loginToken });

      this.options = new RequestOptions({ headers: this.headers });
    }
  }

  // 错误事件
  private handleError(error: Response) {
      return Observable.throw(error.json() || 'Server Error');
  }

}
