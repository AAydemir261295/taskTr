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
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ddownAnimation } from '../ddown.animation';
import { EmitEvent } from 'src/app/inc/emitEvent';

@Component({
  selector: 'year-input',
  templateUrl: './yearInput.template.html',
  styleUrls: ['./yearInput.style.scss'],
  animations: [ddownAnimation],
})
export class YearInputComponent implements AfterViewInit {
  constructor(private communication: DateInputCommunication) {}

  myInputForm: FormGroup = new FormGroup({
    myInput: new FormControl(''),
  });

  @ViewChild('yearInput')
  yearInpt: ElementRef<HTMLInputElement>;

  animeState: string = 'init';

  items: any[] = [2022, 2023, 2024, 2025];

  expand() {
    this.animeState = 'start';
    this.animeState = 'end';
  }

  setYear(year) {
    this.yearInpt.nativeElement.value = year;
    this.communication.emit(new EmitEvent('set year', { year: year }));
  }

  hide() {
    this.animeState = 'start';
    this.animeState = 'init';
  }

  ngAfterViewInit(): void {
    this.communication.on('init', (data) => {
      this.yearInpt.nativeElement.value = data.value.year;
    });
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    var target = event.target;
    if (target != this.yearInpt.nativeElement) {
      console.log('here?');
      this.hide();
    }
  }
}
