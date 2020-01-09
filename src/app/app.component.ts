import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'Angular Tailwindcss';
  
  toggleDashboar: boolean;
 
  constructor() { }

  ngOnInit() {
    
    this.toggleDashboar= false
    
  }
  

  toggleDashboard(){
        this.toggleDashboar = !this.toggleDashboar
  }
  
}
