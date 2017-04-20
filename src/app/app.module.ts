// modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Http, RequestOptions } from '@angular/http';


let modules = [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
  HttpModule,
  RouterModule,
  NgbModule.forRoot()
];
 
// pages
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';


let pages = [
  AppComponent
];

import { BarchartComponent } from './shared/barchart/barchart.component';

let cmp = [
  BarchartComponent,
];


//  widgets

import { MitLayoutModule } from './widgets/mit-layout/mit-layout.module';


let widgets = [
   MitLayoutModule
];


// serivces

// routers
import { routing } from './app.routes';


@NgModule({
  declarations: [
    ...cmp,
    ...pages
  ],
  providers: [

    AuthService

  ],  
  imports: [
    ...modules,
    ...widgets,
    routing
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
