import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'


import {Config} from '../../Config';
import { ActivatedRoute, Router } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { FormBuilder, Validators, NgControl, RadioControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import swal from 'sweetalert2';
import { MatSelect } from '@angular/material';
=======
>>>>>>> c764f652eb2d7e1972a3017ec14b5e4fb6252fb0

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html'
})
export class NewProductComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
