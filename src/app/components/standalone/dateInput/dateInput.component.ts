import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DateInputCommunication } from './dateInput.communication';
import { EmitEvent } from 'src/app/inc/emitEvent';
import { DayInputComponent } from './dayInput/dayInput.component';
import { MonthInputComponent } from './monthInput/monthInput.component';
import { YearInputComponent } from './yearInput/yearInput.component';

@Component({
  selector: 'date-input',
  templateUrl: './dateInput.template.html',
  styleUrls: ['./dateInput.style.scss'],
})
export class DateInputComponent implements OnInit {
  constructor(private communication: DateInputCommunication) {}

  @ViewChild(DayInputComponent)
  day: DayInputComponent;
  @ViewChild(MonthInputComponent)
  month: MonthInputComponent;
  @ViewChild(YearInputComponent)
  year: YearInputComponent;

  getStamp() {
    var timeStamp =
      this.year.getValue() +
      '-' +
      this.month.getValue() +
      '-' +
      this.day.getValue();
      console.log(timeStamp);
      // return timeStamp;
  }

  ngOnInit(): void {
    var now = new Date(Date.now());
    var today = now.getDate();
    var currentYear = now.getFullYear();
    var currentMonth = now.getMonth();
    // var maxDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    this.communication.emit(
      new EmitEvent('init', {
        month: currentMonth,
        year: currentYear,
        today: today,
      })
    );
  }
}
