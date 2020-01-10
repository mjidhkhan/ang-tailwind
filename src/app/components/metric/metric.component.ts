import { Component, OnInit, Input } from '@angular/core';
import {ThrowStmt} from '@angular/compiler';


@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.scss']
})
export class MetricComponent implements OnInit{
  @Input() title: string = ''
  @Input() description: string =''
  @Input('used') value: number = 0
  @Input('available') max: number = 100

  isDanger(){
    return this.value / this.max > 0.7
  }
    
  constructor() { }

  ngOnInit(){}

}
