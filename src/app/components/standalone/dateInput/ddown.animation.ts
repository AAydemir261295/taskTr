import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const ddownAnimation = trigger('animeTrigger', [
  state('init', style({ height: '0px', visibility: 'hidden' })),
  state('start', style({ height: '0px', visibility: 'visible' })),
  state('end', style({})),
  transition('init <=> start', animate('0s linear')),
  transition('* <=> end', animate('0.15s linear')),
]);
