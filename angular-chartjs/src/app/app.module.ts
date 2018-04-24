import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CircuitService } from './circuit.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CircuitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
