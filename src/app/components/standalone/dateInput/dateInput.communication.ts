import { Injectable } from "@angular/core";
import { BehaviorSubject, Subscription, filter } from "rxjs";
import { EmitEvent } from "src/app/inc/emitEvent";

@Injectable()
export class DateInputCommunication {
  private subject: BehaviorSubject<EmitEvent> = new BehaviorSubject(
    new EmitEvent("")
  );

  emit(event: EmitEvent) {
    this.subject.next(event);
  }

  on(event: string, action: any): Subscription {
    return this.subject
      .pipe(filter((e: EmitEvent) => e.name === event))
      .subscribe(action);
  }
}