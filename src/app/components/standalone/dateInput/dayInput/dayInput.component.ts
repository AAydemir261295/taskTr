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
import { ddownAnimation } from '../ddown.animation';

@Component({
  selector: 'day-input',
  templateUrl: './dayInput.template.html',
  styleUrls: ['./dayInput.style.scss'],
  animations: [ddownAnimation],
})
export class DayInputComponent implements AfterViewInit {
  constructor(private communication: DateInputCommunication) {}

  myInputForm: FormGroup = new FormGroup({
    myInput: new FormControl(''),
  });

  @ViewChild('dayInput')
  dayInput: ElementRef<HTMLInputElement>;

  items: any[] = [];

  currentYear: number;
  currentMonth: number;

  animeState: string = 'init';

  expand() {
    this.animeState = 'start';
    this.animeState = 'end';
  }

  hide() {
    this.animeState = 'start';
    this.animeState = 'init';
  }

  setDays(maxDays) {
    var day = 1;
    var tmp = [];
    for (let q = 0; q < maxDays; q++) {
      tmp.push(day);
      day++;
    }
    this.items = tmp;
  }

  ngAfterViewInit(): void {
    this.communication.on('init', (data) => {
      this.setDays(data.value.maxDay);
      this.dayInput.nativeElement.value = data.value.today;
    });

    this.communication.on('set days', (data) => {
      console.log(data);
      this.setDays(data.value.maxDay);
    });
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    var target = event.target;
    if (target != this.dayInput.nativeElement) {
      console.log('here?');
      this.hide();
    }
  }
}
