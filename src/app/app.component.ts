import { Component } from '@angular/core';
import { RouterAnimations } from './animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [RouterAnimations.routeSlide]
})
export class AppComponent {
  animate() {
    return {
      value: Math.random() * 16
    };
  }
}
