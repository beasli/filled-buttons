import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FilledButtonsModule } from 'filled-buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FilledButtonsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
