import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-service-contact-form',
  templateUrl: './customer-service-contact-form.page.html',
  styleUrls: ['./customer-service-contact-form.page.scss'],
})
export class CustomerServiceContactFormPage implements OnInit {
  customerServiceForm: FormGroup;
  petitionTypeControl: FormControl = new FormControl('', [Validators.required]);
  nameControl: FormControl = new FormControl('', [Validators.required]);
  firstSurnameControl: FormControl = new FormControl('', [Validators.required]);
  secondSurnameControl: FormControl = new FormControl('');
  emailControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  phoneNumberControl: FormControl = new FormControl('');
  commentControl: FormControl = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) {
    this.customerServiceForm = this.formBuilder.group({
      petitionType: this.petitionTypeControl,
      name: this.nameControl,
      first_surname: this.firstSurnameControl,
      second_surname: this.secondSurnameControl,
      email: this.emailControl,
      phone_number: this.phoneNumberControl,
      comment: this.commentControl
    })
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.customerServiceForm.value)
  }
}
