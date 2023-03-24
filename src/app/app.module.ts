import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MaterialbuttonComponent } from './materialbutton/materialbutton.component';
import { MaterialTypographyComponent } from './material-typography/material-typography.component';

@NgModule({
  declarations: [
    AppComponent,
    MaterialbuttonComponent,
    MaterialTypographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
