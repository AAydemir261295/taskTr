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
import { ddownAnimation } from '../ddown.animation';
import { EmitEvent } from 'src/app/inc/emitEvent';

@Component({
  selector: 'month-input',
  templateUrl: './monthInput.template.html',
  styleUrls: ['./monthInput.style.scss'],
  animations: [ddownAnimation],
})
export class MonthInputComponent implements AfterViewInit {
  constructor(private communication: DateInputCommunication) {}

  myInputForm: FormGroup = new FormGroup({
    myInput: new FormControl(''),
  });

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

  expand() {
    this.animeState = 'start';
    this.animeState = 'end';
  }

  setMonth(month){

    this.monthInput.nativeElement.value = month;
    this.setDays();
  }

  setDays() {
    var now = new Date(Date.now());
    var maxDay = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    this.communication.emit(new EmitEvent('set days', { maxDay: maxDay }));
  }

  hide() {
    this.animeState = 'start';
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
      console.log('here?');
      this.hide();
    }
  }
}
