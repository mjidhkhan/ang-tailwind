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
      name: 'Advance Component',
      catagory: 'Components ',
      img: '/assets/img/topic/undraw_windows_q9m0.svg',
      titles: [
        'Change detection and optimization' ,
        'Communicating between components' ,
        'View Child to reference components' ,
        'Styling components and encapsulation modes' ,
        'Encapsulation modes' ,
        'Dynamically rendering components' ,
      ]

    },
    {
      id: 3,
      name: 'Services',
      catagory: 'Components ',
      img: '/assets/img/topic/undraw_windows_q9m0.svg',
      titles: [
        'Creating Angular services' ,
        'Communicating between components' ,
        'Dependency injection and injector trees ' ,
        'Services without dependency injection' ,
        'Using the HttpClient service' ,
        'Helper services',
        'Services for sharing',
        'Additional services',
      ]

    },
    {
      id: 4,
      name: 'Routing',
      catagory: 'Components ',
      img: '/assets/img/topic/undraw_windows_q9m0.svg',
      titles: [
      
        'Route definitions and router setup', 
        'Feature modules and routing ',
        'Route parameters' ,
        'Child routes' ,
        'Secondary routes' ,
        'Route guards to limit access' ,
        'Lazy loading' ,
        'Routing best practices', 
        
      ]

    },
    {
      id: 4,
      name: 'Building custom directives and pipes',
      catagory: 'Components ',
      img: '/assets/img/topic/undraw_windows_q9m0.svg',
      titles: [
        'Crafting custom directive',
        'Crafting custom pipes'
      ]

    },
    {
      id: 4,
      name: 'Forms',
      catagory: 'Components ',
      img: '/assets/img/topic/undraw_windows_q9m0.svg',
      titles: [
        'Template-driven forms', 
        'Reactive forms', 
        'Custom form controls' 
      ]

    }
    
  ];

   
}
