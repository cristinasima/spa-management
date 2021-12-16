import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpConfigService } from './services/http-config.service';
import { MainPageModule } from './main-page/main-page.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainPageModule,
    HttpClientModule,
  ],
  providers: [
    HttpClientModule,
    HttpConfigService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
