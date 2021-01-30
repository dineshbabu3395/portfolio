import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  skills=[
    {
      skill: 'Angular 2+',
      percentage: 70
    },
    {
      skill: 'JavaScript',
      percentage: 80
    },
    {
      skill: 'HTML5',
      percentage: 75
    },
    {
      skill: 'CSS3',
      percentage: 75
    },
    {
      skill: 'MongoDB',
      percentage: 70
    }
  ]
  ngOnInit(): void {
  }

}
