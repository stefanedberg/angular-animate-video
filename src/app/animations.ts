import {
  trigger,
  transition,
  group,
  query,
  style,
  animate,
} from '@angular/animations';

export class RouterAnimations {
  static routeSlide = trigger('routeSlide', [
    transition('* <=> *', [
      group([
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateX(160px)' }),
            animate(
              '700ms ease-in-out',
              style({ opacity: 1, transform: 'translateX(0)' })
            ),
          ],
          { optional: true }
        ),
        query(
          ':leave',
          [
            style({ opacity: 1, transform: 'translateX(0)' }),
            animate(
              '700ms ease-in-out',
              style({ opacity: 0, transform: 'translateX(-160px)' })
            ),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ]);
}
