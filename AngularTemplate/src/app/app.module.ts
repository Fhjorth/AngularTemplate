import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataListComponent } from './data-list/data-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {NavBarModule} from './nav-bar/nav-bar.module';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';

@NgModule({
  declarations: [
    AppComponent,
    DataListComponent,
    NavBarComponent,
    NavDrawerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
