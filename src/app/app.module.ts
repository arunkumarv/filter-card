import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilterCardModule } from './filter-card/filter-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FilterCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
