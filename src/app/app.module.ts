import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { HighchartsChartModule } from 'highcharts-angular';

import { AppComponent } from './app.component';
import { MonoplazaComponent } from './monoplaza/monoplaza.component';
import { MonoplazaDetailComponent } from './monoplaza-detail/monoplaza-detail.component';
import { MonoplazasService } from './monoplaza.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './message.service';
import { AppRoutingModule } from './app-routing.module';
import { Grafico01Component } from './grafico01/grafico01.component';
import { Grafico02Component } from './grafico02/grafico02.component';
import {APP_BASE_HREF} from '@angular/common';


@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule, AppRoutingModule, HighchartsChartModule ],
  declarations: [ AppComponent, MonoplazaComponent, MonoplazaDetailComponent, MessagesComponent, Grafico01Component, Grafico02Component],
  bootstrap:    [ AppComponent ],
  providers: [MonoplazasService, MessageService, {provide: APP_BASE_HREF, useValue: '/grafico'}]

})
export class AppModule { }
