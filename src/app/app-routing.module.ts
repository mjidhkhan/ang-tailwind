import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopicsComponent } from './components/topics/topics.component';
import { HomeComponent } from './components/home/home.component';
import { TwowayComponent } from './components/twoway/twoway.component';
import { ModelBindingComponent } from './components/model-binding/model-binding.component';
import { ForLoopComponent } from './components/for-loop/for-loop.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MetricComponent } from './components/metric/metric.component';

import { CountriesComponent } from './components/countries/countries.component';


const routes: Routes = [
  {path:'topics', component: TopicsComponent},
  {path:'home', component: HomeComponent},
  {path:'interpolation', component: TwowayComponent},
  {path:'binding', component: ModelBindingComponent},
  {path:'loop', component: ForLoopComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'metric', component: MetricComponent},
 
  {path:'countries', component: CountriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
