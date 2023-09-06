import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JoinItemTemplateDirective, JoinItemsComponent, JoinItemsComponentExample } from 'src/components';

@NgModule({
  declarations: [
    AppComponent,
    JoinItemsComponent,
    JoinItemTemplateDirective,
    JoinItemsComponentExample,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
