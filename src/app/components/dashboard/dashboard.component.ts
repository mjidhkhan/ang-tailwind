import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
myDisabledValue =true
  constructor() { }

  ngOnInit() {
    this.myDisabledValue =true
  }

  toggleTopics(){
        this.myDisabledValue = !this.myDisabledValue
  }

}
