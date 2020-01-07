import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myVariable =''
  myDisabledValue =true
  constructor() { 
   
    setInterval(()=>{
      this.myVariable = Math.random().toString()
      
    }, 1500)
  }

  ngOnInit() {
    this.myVariable =''
    this.myDisabledValue =true
  }

  toggleInput(){
        this.myDisabledValue = !this.myDisabledValue
  }

}
