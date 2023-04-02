import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MarvellousComponent } from './marvellous/marvellous.component';
import { NihalComponent } from './nihal/nihal.component';
import { InfosystemsComponent } from './infosystems/infosystems.component';

@NgModule({
  declarations: [
    AppComponent,
    MarvellousComponent,
    NihalComponent,
    InfosystemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
