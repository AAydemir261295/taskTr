import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { DateInputCommunication } from '../dateInput.communication';
import { FormControl, FormGroup } from '@angular/forms';
import { ddownAnimation } from '../../animations/ddown.animation';

@Component({
  selector: 'day-input',
  templateUrl: './dayInput.template.html',
  styleUrls: ['./dayInput.style.scss'],
  animations: [ddownAnimation],
})
export class DayInputComponent implements AfterViewInit {
  constructor(private communication: DateInputCommunication) {}

  @ViewChild('dayInput')
  dayInput: ElementRef<HTMLInputElement>;

  items: any[] = [];

  currentYear: number;
  currentMonth: number;

  animeState: string = 'init';

  getValue() {
    return this.dayInput.nativeElement.value;
  }

  setDay(day) {
    this.dayInput.nativeElement.value = day;
  }

  expand() {
    // this.animeState = 'start';
    this.animeState = 'end';
  }

  hide() {
    // this.animeState = 'start';
    this.animeState = 'init';
  }

  setDays(currentMonth, currentYear) {
    this.currentMonth = currentMonth;
    this.currentYear = currentYear;
    var maxDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    var day = 1;
    var tmp = [];
    for (let q = 0; q < maxDay; q++) {
      tmp.push(day);
      day++;
    }
    this.items = tmp;
  }

  ngAfterViewInit(): void {
    this.communication.on('init', (data) => {
      this.setDays(data.value.month, data.value.year);
      this.dayInput.nativeElement.value = data.value.today;
    });

    this.communication.on('set year', (data) => {
      this.setDays(this.currentMonth, data.value.year);
    });

    this.communication.on('set month', (data) => {
      this.setDays(data.value.month, this.currentYear);
    });
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    var target = event.target;
    if (target != this.dayInput.nativeElement) {
      this.hide();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.hide();
  }
}
