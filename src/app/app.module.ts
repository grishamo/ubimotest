import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GotmapComponent } from './gotmap/gotmap.component';
import { AdhistoryComponent } from './adhistory/adhistory.component';

@NgModule({
  declarations: [
    AppComponent,
    GotmapComponent,
    AdhistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
