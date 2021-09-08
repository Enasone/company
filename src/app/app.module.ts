import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SummaryPageComponent } from './modules/summary-page/summary-page.component';
import { ListPageComponent } from './modules/list-page/list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryPageComponent,
    ListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
