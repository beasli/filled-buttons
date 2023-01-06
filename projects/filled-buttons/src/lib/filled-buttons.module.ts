import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FilledButtonsComponent } from './filled-buttons.component';
import { FilledButtonsDirective } from './filled-buttons.directive';

@NgModule({
  declarations: [FilledButtonsComponent, FilledButtonsDirective],
  imports: [FormsModule, CommonModule, BrowserModule],
  exports: [FilledButtonsComponent, FilledButtonsDirective],
})
export class FilledButtonsModule {}
