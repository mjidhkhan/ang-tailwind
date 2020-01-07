import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway',
  templateUrl: './twoway.component.html',
  styleUrls: ['./twoway.component.scss']
})
export class TwowayComponent implements OnInit {
 text = ''

  constructor() { }

  ngOnInit() {
  }

  updateText(e){
    this.text = e.target.value
    
  }

  

}
