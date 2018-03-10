import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {NgForm} from '@angular/forms';
// import {ContactUsService} from "./contact-us.service";
import { AgmCoreModule } from '@agm/core';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const NAME_REGEX = /^[a-zA-Z _.]+$/;
const PHONE_REGEX = /^[0-9]+$/;

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  username;
  password;
  public model: any = {};
  public Contacts:any;
  loaded = false;
  // lat: number = 31.514538;
  // lng: number = 74.34482;
  lat = 32.9482448;
  lng = -96.82428649999997;
  usernameFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(NAME_REGEX)
  ]);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ]);
  // Validators.pattern('[a-zA-Z]+?')

  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(PHONE_REGEX)
  ]);

  subjectFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z-0-9 _.]+?')
  ]);
  constructor() { }

  ngOnInit() {
  }

}
