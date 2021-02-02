import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterAnimations } from '../animations';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss'],
  animations: [RouterAnimations.routeSlide],
})
export class TwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute() {
    return {
      value: 'always' + Math.random() * 16,
      params: {},
    };
  }
}
