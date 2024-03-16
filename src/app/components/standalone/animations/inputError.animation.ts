import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const inputError = trigger('errorTrigger', [
  state('init', style({ height: '40px' })),
  state('show', style({ height: '75px' })),
  transition('init <=> show', animate('0.2s cubic-bezier(.36,1.12,.31,.95)')),
]);
