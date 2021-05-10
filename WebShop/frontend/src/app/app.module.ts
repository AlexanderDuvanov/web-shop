import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { DeliveryModule } from './delivery/delivery.module';
import { NavComponent } from './nav/nav.component';
import { IntroModule } from './intro/intro.module';
import { WINDOW_PROVIDERS } from './shared/injection-tokens/window.token';
import { NavModule } from './nav/nav.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogModule } from './catalog/catalog.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DeliveryModule,
    IntroModule,
    HomeModule,
    NavModule,
    CatalogModule
  ],
  providers: [
    WINDOW_PROVIDERS
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
