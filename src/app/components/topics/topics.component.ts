import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent implements OnInit {
 
  constructor() { }
 
  ngOnInit() {
   
  }

  topics = [
    {
      id: 1,
      name: 'Component Basics',
      catagory: 'Components ',
      img: '/assets/img/topic/undraw_invite_i6u7.svg',
      titles: [
        'The basics of components and their role' ,
        'The @Component decorator and its most' ,
        'important properties' ,
        'Rendering a component' ,
        'Passing data into and out of a component using inputs and outputs' ,
        'Customizing components with templates and styling' ,
        'Injecting content into a component using projection' ,
      ]

    },
    {
      id: 2,
      name: 'Component Basics2',
      catagory: 'Components ',
      img: '/assets/img/topic/undraw_windows_q9m0.svg',
      titles: [
        'The basics of components and their role' ,
        'The @Component decorator and its most' ,
        'important properties' ,
        'Rendering a component' ,
        'Passing data into and out of a component using inputs and outputs' ,
        'Customizing components with templates and styling' ,
       'Injecting content into a component using projection' ,
      ]

    },
    
  ];

   
}
