import { Component, OnInit } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/map'


import { Config } from "/Users/Brainplow/Documents/GitHub/genie/src/app/Config";
import { ActivatedRoute, Router } from "@angular/router";
import { SimpleGlobal } from 'ng2-simple-global';
import { ResponseContentType } from '@angular/http/src/enums';
import { FormBuilder, Validators, NgControl, RadioControlValueAccessor, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import swal from 'sweetalert2';
import { MatSelect } from '@angular/material';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html'
})
export class NewProductComponent implements OnInit {
  state;
  city;
  signupForm: FormGroup;
  private next: any;
  model: any = {};
  normalPattern = '[a-zA-Z0-9_.-]+?';
  digitsOnly = '^[0-9,-]+$';
  email = '^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$';

  flag = true;
  date = new FormControl(new Date());

  emailexist: boolean = false;

  constructor(public router: Router, private fb: FormBuilder, private http: HttpClient, private route: ActivatedRoute, private sg: SimpleGlobal) { }

  //constructor() { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'zipcode': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'Companyname': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'profileurl': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'plan_information': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'price_rate': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'fact_sheet': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'terms_of_service': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'Phone': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'sign_up': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'renewable': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'price_1000_kwh': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'price_500_kwh': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],
      'price_2000_kwh': ['', Validators.compose([Validators.required, Validators.pattern(this.normalPattern)])],


    });
  }
  // sweetalertsignup1() {
  //   swal({
  //       text: "Register Successflluy!",
  //       title: "Choice Genie",
  //       type: "success",
  //       showConfirmButton: false,
  //       //     confirmButtonColor: "#DD6B55",
  //       timer: 1200,
  //       confirmButtonText: "OK",


  //   })
  //   // . then 
    
  //   // window.location.reload();
  // }
  
  onSubmit(f) {
    f.resetForm();
  }
  signupuserdata() {
    //alert('hello');
    console.log("CHOICE GENIE", this.model);

    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    // this.http.get(Config.api + 'data_against_zipcode/' + this.zip_code + '', { headers: headers }),
    this.http.post('https://apis.choicegenie.com/companyregister/', this.model, { headers: headers })
      .subscribe(Res => {
        console.log(Res);
        // this.next = Res[0].next;
        swal({
          text: "Register Successflluy!",
          title: "Choice Genie",
          type: "success",
          showConfirmButton: false,
          //     confirmButtonColor: "#DD6B55",
          timer: 1200,
          confirmButtonText: "OK",
  
  
      })
     
        console.log(this.model);

        //     //    this.state = Res[0].state;
        //     //this.sg['products'] = Res.json()['Results'];
        //     //this.data.changeProducts(this.sg['products']);

      });


  }

}
