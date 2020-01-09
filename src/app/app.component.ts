import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'Angular Tailwindcss';
  toggleTopic: boolean
  toggleLoo: boolean;
  toggleMetri: boolean;
  toggleCountry: boolean;
  toggleTwoWa: boolean;
  toggleHom: boolean;
  toggleDashboar: boolean;
  toggleBindin: boolean;
  constructor() { }

  ngOnInit() {
    this.toggleTopic = false
    this.toggleLoo= false
    this.toggleMetri= false
    this.toggleCountry= false
    this.toggleTwoWa= false
    this.toggleDashboar= false
    this.toggleBindin= false
  }
  
  toggleTopics(){
        this.toggleTopic = !this.toggleTopic
  }
  toggleCountries(){
        this.toggleCountry = !this.toggleCountry
  }
  toggleMetric(){
        this.toggleMetri = !this.toggleMetri
  }
  toggleTwoWay(){
        this.toggleTwoWa = !this.toggleTwoWa
  }
  toggleLoop(){
        this.toggleLoo = !this.toggleLoo
  }
  toggleHome(){
        this.toggleHom = !this.toggleHom
  }
  toggleDashboard(){
        this.toggleDashboar = !this.toggleDashboar
  }
  toggleBinding(){
        this.toggleBindin = !this.toggleBindin
  }
}
