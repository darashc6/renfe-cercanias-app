import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-form-input',
  templateUrl: './custom-form-input.component.html',
  styleUrls: ['./custom-form-input.component.scss'],
})
export class CustomFormInputComponent implements OnInit {
  @Input() label: string = '';
  @Input() inputStyle: string = ''; // 'simple' or 'textarea' 
  @Input() isRequired: boolean = true;
  @Input() inputType: string = '';
  @Input() inputFormControl: FormControl = new FormControl('');

  constructor() { }

  ngOnInit() {
  }

}
