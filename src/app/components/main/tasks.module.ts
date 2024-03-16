import { NgModule } from '@angular/core';

import { TasksComponent } from './tasks.component';
import { CommonModule } from '@angular/common';
import { MyInputComponent } from '../standalone/myInput/myInput.component';
import { DateInputComponent } from '../standalone/dateInput/dateInput.component';
import { DateInputModule } from '../standalone/dateInput/dateInput.module';
import { PriorityInputComponent } from '../standalone/ddownInput/ddownInput.component';
import { SelectInputComponent } from '../standalone/selectInput/selectInput.component';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, DateInputModule, MyInputComponent, PriorityInputComponent, SelectInputComponent],
  providers: [],
  bootstrap: [],
  exports: [TasksComponent]
})
export class TasksModule {}
