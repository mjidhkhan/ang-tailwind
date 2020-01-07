import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TwowayComponent } from './components/twoway/twoway.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TwowayComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
