import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { ColorComponent } from './color/color.component';

@NgModule({

  declarations: [
    AppComponent,
    ColorComponent
    ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

