import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GotmapComponent } from './gotmap/gotmap.component';
import { AdhistoryComponent } from './adhistory/adhistory.component';

import { AdDispatcher } from 'ubimo-fed-home-assigment';

@NgModule({
  declarations: [
    AppComponent,
    GotmapComponent,
    AdhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AdDispatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
