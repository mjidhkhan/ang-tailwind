import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objectives',
  templateUrl: './objectives.component.html',
  styleUrls: ['./objectives.component.scss']
})
export class ObjectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  objectives = [
    {
      id: 1,
      name: 'Component Basics',
      catagory: 'Components ',
      icon: 'http://satyr.io/200x200/10?text=Components',
      covers: [
        { T1: 'The basics of components and their role' },
        { T2: 'The @Component decorator and its most' },
        { T3: 'important properties' },
        { T4: 'Rendering a component' },
        { T5: 'Passing data into and out of a component using inputs and outputs' },
        { T6: 'Customizing components with templates and styling' },
        { T7: 'Injecting content into a component using projection' },
      ]

    },
    
  ];
}
