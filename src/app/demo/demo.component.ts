import { Component, OnInit, Input } from '@angular/core';

const comments = [
  {
    text: "1",
    comments: [
      {
        text: "1.1",
        comments: [
          {
            text: "1.1.1 "
          }
        ]
      },
       {
        text: "1.2",
        comments: [
          {
            text: "1.2.1"
          }
        ]
      }
    ]
  },
     {
    text: "2",
    comments: [
      {
        text: "2.1",
        comments: [
          {
            text: "2.1.1"
          }
        ]
      }
    ]
  }];
  
@Component({
  selector: 'expired-field',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  @Input() myData: any;
  
  constructor() { }

  ngOnInit() {
  }

}
