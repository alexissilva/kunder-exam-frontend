import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from '../components/home/home.component';
import { BannerComponent } from '../components/banner/banner.component';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ApiRestProvider } from '../providers/api-rest/api-rest';

@NgModule({
  declarations: [
    MyApp,
    HomeComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiRestProvider
  ]
})
export class AppModule {}
