import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { MyInputComponent } from '../standalone/myInput/myInput.component';



@Component({
  selector: 'tasks',
  templateUrl: './tasks.template.html',
  styleUrls: ['./tasks.style.scss'],
  animations: [
    trigger('asideTrigger', [
      state('init', style({ right: '0px' })),
      state('show', style({ right: '0px', transform: 'translateX(330px)' })),
      transition(
        'init => show',
        animate('0.4s cubic-bezier(.36,1.12,.31,.95)')
      ),
      transition(
        'show => init',
        animate('0.4s cubic-bezier(.36,1.12,.31,.95)')
      ),
    ]),
  ],
})
export class TasksComponent {
  asideState: string = 'init';

  @ViewChildren("asideInput") inputs!: QueryList<MyInputComponent>;

  activateBtn(ele: HTMLButtonElement) {
    ele.classList.toggle('my-btn--active');
  }

  save(){
    this.inputs.forEach((input) => {
      console.log(input.getValue());
    })
  }
}
