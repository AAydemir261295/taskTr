import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { inputError } from '../animations/inputError.animation';

const validators = {
  header: [{ minMax: { min: 5, max: 15 } }, { pattern: '[a-zA-Z]+' }],
  name: [{ minMax: { min: 5, max: 35 } }, { pattern: '[a-zA-Z0-9]+' }],
};

const errorMsgs = {
  header: {
    minlength: 'Min length is 5',
    maxlength: 'Max length is 15',
    pattern: 'Input can be latin only',
    required: "header is required"
  },
  name: {
    minlength: 'Min length is 5',
    maxlength: 'Max length is 35',
    pattern: 'Input can be latin and numeric',
    required: "task name is required"
  },
};

@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  selector: 'my-input',
  templateUrl: './myInput.template.html',
  styleUrls: ['./myInput.style.scss'],
  animations: [
    inputError
  ],
})
export class MyInputComponent implements OnInit {
  myInputForm: FormGroup = new FormGroup({
    myInput: new FormControl(''),
  });

  @ViewChild('errorEle')
  errorEle: ElementRef<HTMLDivElement>;

  @Input()
  type: string;
  @Input()
  placeholder: string;

  errorState: string = 'init';
  errorMsg: string;

  getValue() {
    if (this.myInputForm.get('myInput').errors == null) {
      this.errorState = 'init';
      return this.myInputForm.controls['myInput'].value;
    } else {
      this.showError(this.type);
      return null;
    }
  }

  showError(type: string) {
    this.errorState = 'show';
    var erorrs = errorMsgs[type];
    var errorType = Object.keys(this.myInputForm.get('myInput').errors)[0];
    this.errorMsg = erorrs[errorType];
  }

  addValidators(validators) {
    var result: ValidatorFn[] = [Validators.required];
    validators.forEach((values) => {
      let key = Object.keys(values)[0];
      console.log(values[key]);
      if (key == 'minMax') {
        result.push(...this.getMinMaxValidators(values[key]));
        // this.addMinMaxValidator(values[key]);
      } else if (key == 'pattern') {
        result.push(...this.getPatternValidator(values[key]));
      }
    });
    this.myInputForm.controls['myInput'].addValidators(result);
  }

  getMinMaxValidators(values: { min: number; max: number }) {
    return [Validators.minLength(values.min), Validators.maxLength(values.max)];
  }

  getPatternValidator(pattern) {
    return [Validators.pattern(pattern)];
  }


  ngOnInit(): void {
    switch (this.type) {
      case 'header':
        this.addValidators(validators.header);
        break;
      case 'name':
        this.addValidators(validators.name);
        break;
    }
  }
}
