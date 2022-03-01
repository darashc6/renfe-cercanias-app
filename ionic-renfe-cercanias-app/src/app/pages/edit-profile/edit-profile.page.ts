import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  profileForm: FormGroup;
  // Personal information form input controls
  nameControl: FormControl = new FormControl('', [Validators.required]);
  firstSurnameControl: FormControl = new FormControl('', [Validators.required]);
  secondSurnameControl: FormControl = new FormControl('');
  phoneNumberControl: FormControl = new FormControl('', [Validators.required, Validators.maxLength(9)]);
  nationalityControl: FormControl = new FormControl('', [Validators.required]);
  idCardControl: FormControl = new FormControl('', [Validators.required]);
  birthDateControl: FormControl = new FormControl('', [Validators.required]);
  emailControl: FormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordControl: FormControl = new FormControl('', [Validators.required]);

  // User address form input controls
  streetNameControl: FormControl = new FormControl('', [Validators.required]);
  streetNumberControl: FormControl = new FormControl('', [Validators.required]);
  streetExtrasControl: FormControl = new FormControl('');
  provinceControl: FormControl = new FormControl('', [Validators.required]);
  cityControl: FormControl = new FormControl('', [Validators.required]);
  postalCodeControl: FormControl = new FormControl('', [Validators.required, Validators.maxLength(5)]);

  // '+ Renfe' Card link form input controls
  cardHolderControl: FormControl = new FormControl('');
  cardNumberControl: FormControl = new FormControl('');


  constructor(private formBuilder: FormBuilder) {
    this.profileForm = this.formBuilder.group({
      name: this.nameControl,
      first_surname: this.firstSurnameControl,
      second_surname: this.secondSurnameControl,
      phone_number: this.phoneNumberControl,
      nationality: this.nationalityControl,
      id_card: this.idCardControl,
      birth_date: this.birthDateControl,
      email: this.emailControl,
      password: this.passwordControl
    });
  }

  ngOnInit() {
  }

  saveProfileChanges() {
    console.log(this.profileForm.value)
  }

}
