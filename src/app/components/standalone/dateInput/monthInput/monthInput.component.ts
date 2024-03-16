import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DateInputCommunication } from '../dateInput.communication';
import { FormControl, FormGroup } from '@angular/forms';
import { state, transition, trigger } from '@angular/animations';
import { ddownAnimation } from '../../animations/ddown.animation';
import { EmitEvent } from 'src/app/inc/emitEvent';

@Component({
  selector: 'month-input',
  templateUrl: './monthInput.template.html',
  styleUrls: ['./monthInput.style.scss'],
  animations: [ddownAnimation],
})
export class MonthInputComponent implements AfterViewInit {
  constructor(private communication: DateInputCommunication) {}

  @ViewChild('monthInput')
  monthInput: ElementRef<HTMLInputElement>;

  items: any[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  animeState: string = 'init';

  getValue() {
    return this.items.indexOf(this.monthInput.nativeElement.value);
  }

  expand() {
    // this.animeState = 'start';
    this.animeState = 'end';
  }

  setMonth(month, index) {
    this.monthInput.nativeElement.value = month;
    // this.setDays();
    this.communication.emit(new EmitEvent('set month', { month: index }));
  }

  // setDays() {
  //   var now = new Date(Date.now());
  //   var maxDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  //   this.communication.emit(new EmitEvent('set days', { maxDay: maxDay }));
  // }

  hide() {
    // this.animeState = 'start';
    this.animeState = 'init';
  }

  ngAfterViewInit(): void {
    this.communication.on('init', (data) => {
      this.monthInput.nativeElement.value = this.items[data.value.month];
    });
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    var target = event.target;
    if (target != this.monthInput.nativeElement) {
      this.hide();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.hide();
  }
}
