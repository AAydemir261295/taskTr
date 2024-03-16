import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { MyInputComponent } from '../standalone/myInput/myInput.component';
import { DateInputComponent } from '../standalone/dateInput/dateInput.component';
import { SelectInputComponent } from '../standalone/selectInput/selectInput.component';

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

  @ViewChild('headerInput')
  headerInp: MyInputComponent;
  @ViewChild('nameInput')
  nameInp: MyInputComponent;
  @ViewChild('dateInput')
  dateInp: DateInputComponent;
  @ViewChild('selectInput')
  selectInp: SelectInputComponent;

  activateBtn(ele: HTMLButtonElement) {
    ele.classList.toggle('my-btn--active');
  }

  save() {
    // this.dateInp.getStamp();
    // this.inputs.forEach((input) => {
    //   console.log(input.getValue());
    // });
    // this.headerInp.getValue();
    // this.nameInp.getValue();
    this.selectInp.getValue();
  }
}
