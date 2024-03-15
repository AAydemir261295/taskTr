import { NgModule } from '@angular/core';

import { TasksComponent } from './tasks.component';
import { CommonModule } from '@angular/common';
import { MyInputComponent } from '../standalone/myInput/myInput.component';
import { DateInputComponent } from '../standalone/dateInput/dateInput.component';
import { DateInputModule } from '../standalone/dateInput/dateInput.module';

@NgModule({
  declarations: [TasksComponent],
  imports: [CommonModule, DateInputModule, MyInputComponent],
  providers: [],
  bootstrap: [],
  exports: [TasksComponent]
})
export class TasksModule {}
