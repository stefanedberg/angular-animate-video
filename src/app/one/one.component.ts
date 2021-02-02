import { Component, OnInit } from '@angular/core';
import { RouterAnimations } from '../animations';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss'],
  animations: [RouterAnimations.routeSlide],
})
export class OneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
