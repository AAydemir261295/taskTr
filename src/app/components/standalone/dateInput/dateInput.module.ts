import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateInputComponent } from './dateInput.component';
import { DateInputCommunication } from './dateInput.communication';
import { DayInputComponent } from './dayInput/dayInput.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MonthInputComponent } from './monthInput/monthInput.component';
import { YearInputComponent } from './yearInput/yearInput.component';

@NgModule({
  declarations: [DateInputComponent, DayInputComponent, MonthInputComponent, YearInputComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [DateInputCommunication],
  bootstrap: [],
  exports: [DateInputComponent],
})
export class DateInputModule {}
