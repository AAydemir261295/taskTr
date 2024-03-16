import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ddownAnimation } from '../animations/ddown.animation';
import { CommonModule } from '@angular/common';

const items = {
  priority: [
    '\u{25C9} \u{25C9} \u{25C9} \u{25C9} \u{25C9}',
    '\u{25C9} \u{25C9} \u{25C9} \u{25C9}',
    '\u{25C9} \u{25C9} \u{25C9}',
    '\u{25C9} \u{25C9}',
    '\u{25C9}',
  ],
  status: ['await', 'in progress', 'testing', 'ready'],
};

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'ddown-input',
  templateUrl: './ddownInput.template.html',
  styleUrls: ['./ddownInput.style.scss'],
  animations: [ddownAnimation],
})
export class PriorityInputComponent implements OnInit {
  constructor() {}

  @ViewChild('priorityInput')
  priorityInput: ElementRef<HTMLInputElement>;

  items: any[];

  @Input()
  type: string;
  @Input()
  placeholder: string;

  animeState: string = 'init';

  getValue() {
    return this.priorityInput.nativeElement.value;
  }

  setValue(value) {
    this.priorityInput.nativeElement.value = value;
  }

  expand() {
    this.animeState = 'start';
    this.animeState = 'end';
  }

  hide() {
    this.animeState = 'start';
    this.animeState = 'init';
  }

  ngOnInit(): void {
    if (this.type == 'priority') {
      this.items = items.priority;
    } else if (this.type == 'status') {
      this.items = items.status;
    }
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    var target = event.target;
    if (target != this.priorityInput.nativeElement) {
      this.hide();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.hide();
  }
}
