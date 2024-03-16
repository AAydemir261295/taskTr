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
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { inputError } from '../animations/inputError.animation';

const items = [
  'ÉDOURAD MANET',
  'CLAUDE MONET',
  'EDGAR DEGAS',
  'PIERRE-AUGUSTE RENOIR',
  'CAMILLE PISSARRO',
];

const errors = {
  required: 'responsible is required',
};

@Component({
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  selector: 'select-input',
  templateUrl: './selectInput.template.html',
  styleUrls: ['./selectInput.style.scss'],
  animations: [ddownAnimation, inputError],
})
export class SelectInputComponent implements OnInit {
  constructor() {}

  myInputForm: FormGroup = new FormGroup({
    myInput: new FormControl(''),
  });

  @ViewChild('selectInput')
  selectInput: ElementRef<HTMLInputElement>;

  items: string[];

  selected: string[] = [];

  errorState: string = 'init';
  errorMsg: string;

  animeState: string = 'init';

  getValue() {
    if (this.selected.length > 0) {
      return this.selected;
    } else {
      this.errorState = 'show';
      this.errorMsg = errors.required;
      return null;
    }
  }

  select(value) {
    this.myInputForm.controls['myInput'].setValue('');
    let index = this.items.indexOf(value);
    this.items.splice(index, 1);
    this.selected.push(value);
  }

  deleteItem(value) {
    let index = this.selected.indexOf(value);
    this.items.push(value);
    this.selected.splice(index, 1);
  }

  expand() {
    // this.animeState = 'start';
    this.animeState = 'end';
  }

  hide() {
    // this.animeState = 'start';
    this.animeState = 'init';
  }

  findItems() {
    this.myInputForm.controls['myInput'].valueChanges.subscribe((v: string) => {
      var regex = v.toUpperCase();
      this.expand();
      if (regex == '') {
        this.items = items;
      } else {
        this.items = items.filter(
          (val) => val.indexOf(regex) != -1 && this.selected.indexOf(val) == -1
        );
        if (this.items.length == 0) {
          this.hide();
        }
      }
    });
  }

  ngOnInit(): void {
    this.items = items;
    this.findItems();
  }

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    var target = event.target;
    if (target != this.selectInput.nativeElement) {
      this.hide();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onKeydownHandler(event: KeyboardEvent) {
    this.hide();
  }
}
