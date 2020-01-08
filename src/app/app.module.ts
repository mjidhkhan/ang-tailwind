import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { TwowayComponent } from './components/twoway/twoway.component';
import { ModelBindingComponent } from './components/model-binding/model-binding.component';
import { ForLoopComponent } from './components/for-loop/for-loop.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MetricComponent } from './components/metric/metric.component';
import { TopicsComponent } from './components/topics/topics.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TwowayComponent,
    ModelBindingComponent,
    ForLoopComponent,
    NavbarComponent,
    DashboardComponent,
    MetricComponent,
    TopicsComponent,
   
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
