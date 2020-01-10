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
  private _value: number = 0;
  private _value:number = 100;
  @Input('used')
  set value(value: number){
    if(isNaN(value)) value = 0;
    this._value = value;
  }

  get value(): number {return this._value;}

  @Input('available')
  set max(max: number){
    if(isNaN(max)) max = 100;
    this._max = max;
  }
  get max(): number {return this._max;}
  isDanger(){
    return (this.value / this.max) > 0.8
  }
  isCritical(){
    return (this.value / this.max) > 0.7
  }
    
  constructor() { }

  ngOnInit(){}

}
