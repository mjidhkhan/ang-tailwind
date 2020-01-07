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

  items= [
    { id: 1, name: 'Bing', catagory:'Search Engine ', icon:'http://satyr.io/200/10?brand=bing'  },
    { id: 2, name: 'Apple', catagory:'Mobile', icon:'http://satyr.io/200/0?brand=apple'  },
    { id: 3, name: 'Android', catagory: 'Mobile', icon:'http://satyr.io/200/8?brand=android'   },
    { id: 4, name: 'Google', catagory:'Search Engine', icon:'http://satyr.io/200/7?brand=google'  },
    { id: 5, name: 'DropBox', catagory:'Back Up ', icon:'http://satyr.io/200/6?brand=dropbox'  },
    { id: 6, name: 'Xbox', catagory:'Game ', icon:'http://satyr.io/200/10?brand=xbox'  },
    { id: 7, name: 'YouTube', catagory:'Social Media', icon:'http://satyr.io/200/2?brand=youtube'  },
    { id: 8, name: 'Sass', catagory:'Developer', icon:'http://satyr.io/200/33?brand=sass' },
    { id: 9, name: 'Bootstrap', catagory:'Developer ', icon:'http://satyr.io/200/5?brand=bootstrap'  },
    { id: 10, name: 'Gulp', catagory:'Developer', icon:'http://satyr.io/200/34?brand=gulp'  },
    { id: 11, name: 'Evernote', catagory: 'Mail', icon:'http://satyr.io/200/8?brand=evernote'  },
    { id: 12, name: 'Guithub', catagory: 'Repo', icon:'http://satyr.io/200/28?brand=github'  }
  ];


}
