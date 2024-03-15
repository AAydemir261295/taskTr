import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { DateInputCommunication } from './dateInput.communication';
import { EmitEvent } from 'src/app/inc/emitEvent';

@Component({
  selector: 'date-input-component',
  templateUrl: './dateInput.template.html',
  styleUrls: ['./dateInput.style.scss'],
})
export class DateInputComponent implements OnInit {
  constructor(private communication: DateInputCommunication) {}

  ngOnInit(): void {
    var now = new Date(Date.now());
    var today = now.getDate();
    var currentYear = now.getFullYear();
    var currentMonth = now.getMonth();
    var maxDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    this.communication.emit(
      new EmitEvent('init', {
        maxDay: maxDay,
        month: currentMonth,
        year: currentYear,
        today: today,
      })
    );
  }
}
